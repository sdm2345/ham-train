export interface StudyRecord {
  id?: number
  questionId: string
  timestamp: number
  isCorrect: 0 | 1
  mode: 'practice' | 'exam' | 'review'
  selectedAnswers: string[]
  timeSpent?: number
}
