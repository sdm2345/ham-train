#!/usr/bin/env node
// Merges A.json + questions_tagged.csv → public/data/A-tagged.json
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const HAM_EXAM_WEB = resolve(ROOT, '../ham-exam-web')

// Load source data
const aJson = JSON.parse(readFileSync(resolve(HAM_EXAM_WEB, 'public/questions/A.json'), 'utf8'))
const csvRaw = readFileSync(resolve(HAM_EXAM_WEB, 'A/questions_tagged.csv'), 'utf8')

// Parse CSV — id and question are first two fields, tag and category are LAST two
// Question may contain commas so we split from both ends
const csvLines = csvRaw.trim().split('\n')
const tagMap = new Map()
for (const line of csvLines.slice(1)) {
  if (!line.trim()) continue
  const parts = line.split(',')
  const id = parts[0]                       // first column, never has commas
  const category = parts[parts.length - 1].trim()  // last column, strip \r
  const tag = parts[parts.length - 2].trim()       // second-to-last
  if (id && tag && category) {
    tagMap.set(id, { tag, category })
  }
}

console.log(`Loaded ${tagMap.size} tag entries from CSV`)

// Merge
let merged = 0
let missing = 0
const result = aJson.map((q) => {
  const info = tagMap.get(q.id)
  if (info) {
    merged++
    return {
      id: q.id,
      question: q.question,
      options: q.options,
      answer_keys: q.answer_keys,
      type: q.type,
      tag: info.tag,
      category: info.category,
      codes: q.codes,
      imageUrl: q.imageUrl ?? null,
    }
  } else {
    missing++
    return {
      id: q.id,
      question: q.question,
      options: q.options,
      answer_keys: q.answer_keys,
      type: q.type,
      tag: '其他',
      category: '其他',
      codes: q.codes,
      imageUrl: q.imageUrl ?? null,
    }
  }
})

console.log(`Merged: ${merged}, Missing tags: ${missing}`)

// Write output
const outDir = resolve(ROOT, 'public/data')
mkdirSync(outDir, { recursive: true })
const outPath = resolve(outDir, 'A-tagged.json')
writeFileSync(outPath, JSON.stringify(result, null, 2))
console.log(`Written ${result.length} questions to ${outPath}`)
