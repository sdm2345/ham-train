import { cn } from '@/lib/utils'
import type { Question } from '@/types/question'
import { CheckCircle, XCircle } from 'lucide-react'

interface Props {
  question: Question
  selected: string[]
  onSelect: (key: string) => void
  submitted: boolean
  showAnswer?: boolean
  index?: number
  total?: number
}

export function QuestionCard({ question, selected, onSelect, submitted, showAnswer, index, total }: Props) {
  const isCorrect = (key: string) => question.answer_keys.includes(key)
  const isSelected = (key: string) => selected.includes(key)

  const handleClick = (key: string) => {
    if (submitted) return
    if (question.type === 'single') {
      onSelect(key)
    } else {
      if (isSelected(key)) {
        onSelect(key) // toggle off — parent handles set logic
      } else {
        onSelect(key)
      }
    }
  }

  const resultCorrect = submitted && question.answer_keys.every((k) => selected.includes(k)) && selected.every((k) => isCorrect(k))

  return (
    <div className="flex flex-col gap-4">
      {index !== undefined && total !== undefined && (
        <div className="text-sm text-muted-foreground">
          第 {index + 1} / {total} 题 · {question.type === 'multiple' ? '多选' : '单选'}
        </div>
      )}

      <div className="rounded-lg border bg-card p-4 shadow-sm">
        <p className="text-base font-medium leading-relaxed">{question.question}</p>
      </div>

      <div className="flex flex-col gap-2">
        {question.options.map((opt) => {
          const sel = isSelected(opt.key)
          const correct = isCorrect(opt.key)
          let variant = 'default'
          if (submitted || showAnswer) {
            if (correct && sel) variant = 'correct'
            else if (correct && !sel) variant = 'missed'
            else if (!correct && sel) variant = 'wrong'
          } else if (sel) {
            variant = 'selected'
          }

          return (
            <button
              key={opt.key}
              onClick={() => handleClick(opt.key)}
              disabled={submitted}
              className={cn(
                'flex items-start gap-3 rounded-lg border p-3 text-left text-sm transition-colors',
                variant === 'default' && 'border-border bg-background hover:bg-muted',
                variant === 'selected' && 'border-primary bg-primary/10',
                variant === 'correct' && 'border-green-500 bg-green-50 dark:bg-green-950',
                variant === 'missed' && 'border-green-400 bg-green-50/50 dark:bg-green-950/50',
                variant === 'wrong' && 'border-red-500 bg-red-50 dark:bg-red-950',
              )}
            >
              <span className={cn(
                'flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold',
                variant === 'selected' && 'border-primary bg-primary text-primary-foreground',
                variant === 'correct' && 'border-green-500 bg-green-500 text-white',
                variant === 'wrong' && 'border-red-500 bg-red-500 text-white',
                variant === 'missed' && 'border-green-400 bg-transparent text-green-600',
                (variant === 'default') && 'border-muted-foreground/40',
              )}>
                {opt.key}
              </span>
              <span className="flex-1 leading-relaxed">{opt.text}</span>
              {submitted && correct && <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />}
              {submitted && !correct && sel && <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />}
            </button>
          )
        })}
      </div>

      {submitted && !resultCorrect && (
        <div className="rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm dark:bg-amber-950/30">
          <span className="font-medium text-amber-700 dark:text-amber-400">正确答案：</span>
          <span className="text-amber-800 dark:text-amber-300">
            {question.answer_keys.join('、')}
          </span>
        </div>
      )}
    </div>
  )
}
