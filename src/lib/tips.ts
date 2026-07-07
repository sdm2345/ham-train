// Eagerly load all tip markdown files at build time via Vite glob import.
// Key format: "../../src/tips/A-1.md" → strip to "A-1"
const modules = import.meta.glob('../tips/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>

const tipMap: Record<string, string> = {}
for (const [path, content] of Object.entries(modules)) {
  const id = path.replace('../tips/', '').replace('.md', '')
  tipMap[id] = content
}

export function getTip(questionId: string): string | null {
  return tipMap[questionId] ?? null
}
