import Dexie, { type Table } from 'dexie'
import type { Question } from '@/types/question'
import type { StudyRecord } from '@/types/study'
import type { SRSCard } from '@/types/srs'

class HamTrainDB extends Dexie {
  questions!: Table<Question>
  records!: Table<StudyRecord>
  srs_cards!: Table<SRSCard>

  constructor() {
    super('HamTrainDB')
    this.version(1).stores({
      questions: '&id, tag, category',
      records: '++id, questionId, timestamp, isCorrect, [questionId+isCorrect]',
    })
    this.version(2).stores({
      questions: '&id, tag, category',
      records: '++id, questionId, timestamp, isCorrect, [questionId+isCorrect]',
      srs_cards: '++id, &questionId, box, nextReview',
    })
    this.version(3).stores({
      questions: '&id, tag, category',
      records: '++id, questionId, timestamp, isCorrect, [questionId+isCorrect]',
      srs_cards: '++id, &questionId, box, nextReview, skipped',
    })
  }
}

export const db = new HamTrainDB()
