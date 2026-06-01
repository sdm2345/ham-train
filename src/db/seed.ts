import { db } from './index'
import type { Question } from '@/types/question'

let seedPromise: Promise<void> | null = null

export function seedIfEmpty(): Promise<void> {
  if (seedPromise) return seedPromise
  seedPromise = (async () => {
    const count = await db.questions.count()
    if (count > 0) return
    const url = `${import.meta.env.BASE_URL}data/A-tagged.json`
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Failed to fetch seed data: ${res.status}`)
    const questions: Question[] = await res.json()
    await db.questions.bulkAdd(questions)
  })()
  return seedPromise
}
