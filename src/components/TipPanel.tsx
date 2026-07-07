import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'
import { Lightbulb } from 'lucide-react'

interface Props {
  tip: string
}

export function TipPanel({ tip }: Props) {
  return (
    <div className="rounded-lg border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-4">
      <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-blue-700 dark:text-blue-400">
        <Lightbulb className="h-3.5 w-3.5" />
        速记提示
      </div>
      <div className="prose prose-sm prose-blue dark:prose-invert max-w-none
        [&_table]:w-full [&_table]:text-xs [&_table]:border-collapse
        [&_th]:border [&_th]:border-blue-200 [&_th]:dark:border-blue-700 [&_th]:bg-blue-100/70 [&_th]:dark:bg-blue-900/40 [&_th]:px-2 [&_th]:py-1
        [&_td]:border [&_td]:border-blue-200 [&_td]:dark:border-blue-700 [&_td]:px-2 [&_td]:py-1
        [&_blockquote]:border-l-4 [&_blockquote]:border-blue-400 [&_blockquote]:pl-3 [&_blockquote]:text-sm [&_blockquote]:italic [&_blockquote]:text-blue-800 [&_blockquote]:dark:text-blue-300 [&_blockquote]:my-2
        [&_p]:my-1 [&_p]:text-sm [&_strong]:font-bold
        [&_.katex-display]:overflow-x-auto [&_.katex-display]:py-1
      ">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
        >
          {tip}
        </ReactMarkdown>
      </div>
    </div>
  )
}
