export interface SRSCard {
  id?: number
  questionId: string
  box: 0 | 1 | 2 | 3 | 4 | 5
  nextReview: number
  lastReview: number
  streakCorrect: number
  totalReviews: number
}

// Leitner box intervals in milliseconds
export const BOX_INTERVALS: Record<number, number> = {
  0: 0,              // due immediately (within session)
  1: 86_400_000,     // 1 day
  2: 3 * 86_400_000, // 3 days
  3: 7 * 86_400_000, // 7 days
  4: 14 * 86_400_000,// 14 days
  5: 30 * 86_400_000,// 30 days (graduated)
}

export const BOX_LABELS: Record<number, string> = {
  0: '待复习',
  1: '1天后',
  2: '3天后',
  3: '1周后',
  4: '2周后',
  5: '已毕业',
}
