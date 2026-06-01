import Dexie, { type Table } from 'dexie'
import type { Question } from '@/types/question'
import type { StudyRecord } from '@/types/study'

class HamTrainDB extends Dexie {
  questions!: Table<Question>
  records!: Table<StudyRecord>

  constructor() {
    super('HamTrainDB')
    this.version(1).stores({
      questions: '&id, tag, category',
      records: '++id, questionId, timestamp, isCorrect, [questionId+isCorrect]',
    })
  }
}

export const db = new HamTrainDB()
