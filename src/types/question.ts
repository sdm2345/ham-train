export interface QuestionOption {
  key: string
  text: string
}

export interface Question {
  id: string
  question: string
  options: QuestionOption[]
  answer_keys: string[]
  type: 'single' | 'multiple'
  tag: string
  category: string
  codes?: { J?: string; P?: string }
  imageUrl?: string | null
}

export const CATEGORIES: { key: string; name: string; color: string }[] = [
  { key: '0.法规管理', name: '法规管理', color: 'bg-blue-500' },
  { key: 'F.频率管理', name: '频率管理', color: 'bg-purple-500' },
  { key: '1.操作实践', name: '操作实践', color: 'bg-green-500' },
  { key: '2.发射技术', name: '发射技术', color: 'bg-orange-500' },
  { key: '3.无线电传播', name: '无线电传播', color: 'bg-cyan-500' },
  { key: '4.天线技术', name: '天线技术', color: 'bg-yellow-500' },
  { key: '5.接收技术', name: '接收技术', color: 'bg-rose-500' },
  { key: '6.电路基础', name: '电路基础', color: 'bg-indigo-500' },
  { key: '7.安全', name: '安全', color: 'bg-red-500' },
]
