const modules = import.meta.glob('../knowledge/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>

export interface KnowledgeEntry {
  key: string
  title: string
  content: string
}

const entries: Record<string, KnowledgeEntry> = {}

for (const [path, raw] of Object.entries(modules)) {
  const key = path.replace('../knowledge/', '').replace('.md', '')
  const sep = raw.indexOf('\n---\n')
  if (sep === -1) continue
  const frontmatter = raw.slice(0, sep).trim()
  const content = raw.slice(sep + 5).trim()
  const titleMatch = frontmatter.match(/^title:\s*(.+)$/m)
  const title = titleMatch ? titleMatch[1].trim() : key
  entries[key] = { key, title, content }
}

export function getKnowledge(key: string): KnowledgeEntry | null {
  return entries[key] ?? null
}
