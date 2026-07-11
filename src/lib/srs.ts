import { db } from '@/db'
import type { SRSCard } from '@/types/srs'
import { BOX_INTERVALS } from '@/types/srs'

// Box 0 requires 2 consecutive correct answers before advancing (anti-guessing).
const BOX0_THRESHOLD = 2

export async function upsertSRSCard(questionId: string, correct: boolean): Promise<void> {
  const existing = await db.srs_cards.where('questionId').equals(questionId).first()
  const now = Date.now()

  if (!existing) {
    // All questions are seeded on startup, so this path is a safety fallback only.
    await db.srs_cards.add({
      questionId,
      box: 0,
      nextReview: correct ? now : now, // stays due until answered correctly enough
      lastReview: now,
      streakCorrect: correct ? 1 : 0,
      totalReviews: 1,
    })
    return
  }

  const newStreak = correct ? existing.streakCorrect + 1 : 0

  let newBox: SRSCard['box']
  if (!correct) {
    newBox = 0
  } else if (existing.box === 0) {
    // Must hit BOX0_THRESHOLD consecutive correct answers to leave box 0
    newBox = newStreak >= BOX0_THRESHOLD ? 1 : 0
  } else {
    newBox = Math.min(5, existing.box + 1) as SRSCard['box']
  }

  const interval = BOX_INTERVALS[newBox]
  // Box 0: stay due (nextReview = now) until promoted
  const nextReview = newBox === 0 ? now : now + interval

  await db.srs_cards.update(existing.id!, {
    box: newBox,
    nextReview,
    lastReview: now,
    streakCorrect: newStreak,
    totalReviews: existing.totalReviews + 1,
    // Clear guessed flag when correctly answered (genuinely knew it)
    ...(correct ? { guessed: false } : {}),
  })
}

export async function markGuessed(questionId: string): Promise<void> {
  const existing = await db.srs_cards.where('questionId').equals(questionId).first()
  const now = Date.now()
  if (!existing) return
  await db.srs_cards.update(existing.id!, {
    box: 0,
    nextReview: now,
    lastReview: now,
    streakCorrect: 0,
    guessed: true,
  })
}

export async function markSkipped(questionId: string, skip: boolean): Promise<void> {
  const existing = await db.srs_cards.where('questionId').equals(questionId).first()
  if (!existing) return
  await db.srs_cards.update(existing.id!, { skipped: skip })
}

export function isDue(card: SRSCard): boolean {
  return card.nextReview <= Date.now()
}
