import { db } from './index'
import type { Question } from '@/types/question'

let seedPromise: Promise<void> | null = null

export function seedIfEmpty(): Promise<void> {
  if (seedPromise) return seedPromise
  seedPromise = (async () => {
    const count = await db.questions.count()
    if (count === 0) {
      const url = `${import.meta.env.BASE_URL}data/A-tagged.json`
      const res = await fetch(url)
      if (!res.ok) throw new Error(`Failed to fetch seed data: ${res.status}`)
      const questions: Question[] = await res.json()
      await db.questions.bulkAdd(questions)
    }

    // Ensure every question has an SRS card (idempotent).
    const [allQuestions, existingCards] = await Promise.all([
      db.questions.toArray(),
      db.srs_cards.toArray(),
    ])
    const existingByQid = new Set(existingCards.map((c) => c.questionId))
    const now = Date.now()
    const missing = allQuestions
      .filter((q) => !existingByQid.has(q.id))
      .map((q) => ({
        questionId: q.id,
        box: 0 as const,
        nextReview: now,
        lastReview: 0,
        streakCorrect: 0,
        totalReviews: 0,
      }))
    if (missing.length > 0) {
      await db.srs_cards.bulkAdd(missing)
    }
  })()
  return seedPromise
}
