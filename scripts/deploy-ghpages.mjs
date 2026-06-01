#!/usr/bin/env node
// Deploys dist/ to the gh-pages branch via a temporary worktree
import { execSync } from 'child_process'
import { mkdtempSync, rmSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { tmpdir } from 'os'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(ROOT, 'dist')
const tmp = mkdtempSync(resolve(tmpdir(), 'ham-train-deploy-'))

try {
  execSync(`git -C "${tmp}" init`, { stdio: 'inherit' })
  execSync(`git -C "${tmp}" checkout --orphan gh-pages`, { stdio: 'inherit' })
  execSync(`cp -r "${dist}/." "${tmp}/"`)
  execSync(`touch "${tmp}/.nojekyll"`)
  execSync(`git -C "${tmp}" add -A`, { stdio: 'inherit' })
  execSync(`git -C "${tmp}" commit -m "deploy: $(date '+%Y-%m-%d %H:%M')"`, { stdio: 'inherit' })
  execSync(`git -C "${tmp}" remote add origin $(git -C "${ROOT}" remote get-url origin)`, { stdio: 'inherit' })
  execSync(`git -C "${tmp}" push origin gh-pages --force`, { stdio: 'inherit' })
  console.log('\n✓ Deployed to gh-pages')
} finally {
  rmSync(tmp, { recursive: true, force: true })
}
