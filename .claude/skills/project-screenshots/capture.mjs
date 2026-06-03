// Capture live-site screenshots for each project and save them as compressed
// webp files under apps/site/public/projects/<slug>.webp, matching the
// convention the project detail page uses for the "Visit site" preview card.
//
// Usage:
//   node .claude/skills/project-screenshots/capture.mjs              # all projects with a url
//   node .claude/skills/project-screenshots/capture.mjs petsrs ui    # only matching slugs
//
// Requires `playwright` and `sharp` resolvable from the repo root.

import { existsSync, mkdirSync, readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'
import sharp from 'sharp'

const repoRoot = fileURLToPath(new URL('../../../', import.meta.url))
const projectsDir = path.join(repoRoot, 'apps/site/src/content/projects')
const outDir = path.join(repoRoot, 'apps/site/public/projects')

// 16:10 viewport (matches the card aspect ratio), captured at 2x for crispness.
const VIEWPORT = { width: 1280, height: 800 }
const DEVICE_SCALE_FACTOR = 2
const OUT_WIDTH = 1024
const WEBP_QUALITY = 80
const SETTLE_MS = 2000

const filters = process.argv.slice(2).map(s => s.toLowerCase())

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match)
    return {}
  const data = {}
  for (const line of match[1].split(/\r?\n/)) {
    // Only top-level "key: value" pairs (skip nested/indented lines).
    const kv = line.match(/^(\w[\w-]*):\s*(.*)$/)
    if (kv)
      data[kv[1]] = kv[2].trim().replace(/^['"]|['"]$/g, '')
  }
  return data
}

const targets = readdirSync(projectsDir)
  .filter(f => f.endsWith('.md'))
  .map((file) => {
    const slug = file.replace(/\.md$/, '')
    const fm = parseFrontmatter(readFileSync(path.join(projectsDir, file), 'utf8'))
    return { slug, url: fm.url, title: fm.title ?? slug }
  })
  .filter(t => t.url)
  .filter(t => filters.length === 0 || filters.some(f => t.slug.toLowerCase().includes(f)))

if (targets.length === 0) {
  console.log('No matching projects with a `url` to capture.')
  process.exit(0)
}

if (!existsSync(outDir))
  mkdirSync(outDir, { recursive: true })

console.log(`Capturing ${targets.length} project(s)...\n`)

const browser = await chromium.launch()
const context = await browser.newContext({
  viewport: VIEWPORT,
  deviceScaleFactor: DEVICE_SCALE_FACTOR,
})

let ok = 0
for (const { slug, url } of targets) {
  const page = await context.newPage()
  try {
    console.log(`→ ${slug}: ${url}`)
    // 'load' (not 'networkidle') — sites with persistent sockets never idle.
    await page.goto(url, { waitUntil: 'load', timeout: 45000 })
    await page.waitForTimeout(SETTLE_MS)

    const png = await page.screenshot({ type: 'png' }) // viewport only = top of page
    const out = path.join(outDir, `${slug}.webp`)
    const info = await sharp(png)
      .resize({ width: OUT_WIDTH })
      .webp({ quality: WEBP_QUALITY })
      .toFile(out)

    ok++
    console.log(`  ✓ ${path.relative(repoRoot, out)} (${(info.size / 1024).toFixed(0)} KB)\n`)
  }
  catch (err) {
    console.error(`  ✗ ${slug} failed: ${err.message}\n`)
  }
  finally {
    await page.close()
  }
}

await browser.close()
console.log(`Done. ${ok}/${targets.length} captured.`)
