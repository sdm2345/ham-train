import { create } from 'zustand'
import type { Question } from '@/types/question'

interface ExamSession {
  questions: Question[]
  currentIndex: number
  answers: Record<string, string[]>
  flags: Record<string, boolean>
  startTime: number
  endTime: number
  finished: boolean
}

interface SessionStore {
  exam: ExamSession | null
  startExam: (questions: Question[], durationMinutes: number) => void
  answer: (questionId: string, selected: string[]) => void
  toggleFlag: (questionId: string) => void
  jump: (index: number) => void
  next: () => void
  prev: () => void
  finish: () => void
  reset: () => void
}

export const useSessionStore = create<SessionStore>((set) => ({
  exam: null,

  startExam: (questions, durationMinutes) =>
    set({
      exam: {
        questions,
        currentIndex: 0,
        answers: {},
        flags: {},
        startTime: Date.now(),
        endTime: Date.now() + durationMinutes * 60 * 1000,
        finished: false,
      },
    }),

  answer: (questionId, selected) =>
    set((s) =>
      s.exam
        ? { exam: { ...s.exam, answers: { ...s.exam.answers, [questionId]: selected } } }
        : s
    ),

  toggleFlag: (questionId) =>
    set((s) =>
      s.exam
        ? {
            exam: {
              ...s.exam,
              flags: { ...s.exam.flags, [questionId]: !s.exam.flags[questionId] },
            },
          }
        : s
    ),

  jump: (index) =>
    set((s) => (s.exam ? { exam: { ...s.exam, currentIndex: index } } : s)),

  next: () =>
    set((s) =>
      s.exam && s.exam.currentIndex < s.exam.questions.length - 1
        ? { exam: { ...s.exam, currentIndex: s.exam.currentIndex + 1 } }
        : s
    ),

  prev: () =>
    set((s) =>
      s.exam && s.exam.currentIndex > 0
        ? { exam: { ...s.exam, currentIndex: s.exam.currentIndex - 1 } }
        : s
    ),

  finish: () =>
    set((s) => (s.exam ? { exam: { ...s.exam, finished: true } } : s)),

  reset: () => set({ exam: null }),
}))
