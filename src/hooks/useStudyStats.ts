import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '@/db'
import { isDue } from '@/lib/srs'

export function useStudyStats() {
  const totalByCategory = useLiveQuery(async () => {
    const all = await db.questions.toArray()
    const map: Record<string, number> = {}
    for (const q of all) map[q.category] = (map[q.category] ?? 0) + 1
    return map
  }, [])

  const correctByCategory = useLiveQuery(async () => {
    const records = await db.records.where('isCorrect').equals(1).toArray()
    const correctIds = [...new Set(records.map((r) => r.questionId))]
    const questions = await db.questions.where('id').anyOf(correctIds).toArray()
    const map: Record<string, number> = {}
    for (const q of questions) map[q.category] = (map[q.category] ?? 0) + 1
    return map
  }, [])

  const todayCount = useLiveQuery(async () => {
    const midnight = new Date()
    midnight.setHours(0, 0, 0, 0)
    return db.records.where('timestamp').above(midnight.getTime()).count()
  }, [])

  const dueCount = useLiveQuery(async () => {
    const cards = await db.srs_cards.toArray()
    return cards.filter(isDue).length
  }, [])

  return { totalByCategory, correctByCategory, todayCount, dueCount }
}
