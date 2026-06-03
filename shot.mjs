import { chromium } from 'playwright'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
await page.goto('http://127.0.0.1:4321/projects/petsrs/', { waitUntil: 'networkidle' })
await page.click('#flowchart-trigger')
await page.waitForSelector('#fc-diagram svg', { timeout: 15000 })
await page.waitForTimeout(1000)
for (let i=0;i<3;i++){ await page.click('#fc-zoom-in'); await page.waitForTimeout(120) }
await page.waitForTimeout(300)
await page.screenshot({ path: '/tmp/petsrs-zoom.png' })
console.log('ok', await page.$eval('#fc-diagram svg', el => el.style.transform))
