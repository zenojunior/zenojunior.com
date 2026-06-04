import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import process from 'node:process'
import { Resvg } from '@resvg/resvg-js'
import satori from 'satori'
import sharp from 'sharp'
import { config } from '../config'

export interface OgData {
  eyebrow: string
  title: string
  description?: string
}

const WIDTH = 1200
const HEIGHT = 630

// Anchored to the package root (process.cwd() is apps/site in both dev and build);
// import.meta.url is unreliable here since the bundler relocates this module at build.
function font(file: string) {
  return readFileSync(join(process.cwd(), 'src/assets/og-fonts', file))
}

const fonts = [
  { name: 'Inter', data: font('inter-400.ttf'), weight: 400 as const, style: 'normal' as const },
  { name: 'Inter', data: font('inter-600.ttf'), weight: 600 as const, style: 'normal' as const },
  { name: 'Inter', data: font('inter-700.ttf'), weight: 700 as const, style: 'normal' as const },
]

// satori takes a React-element-like tree; build it without JSX to keep this a plain .ts file.
function h(type: string, style: Record<string, unknown>, children?: unknown) {
  return { type, props: { style, ...(children === undefined ? {} : { children }) } }
}

function truncate(text: string, max: number) {
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text
}

export async function renderOgImage({ eyebrow, title, description }: OgData) {
  const safeTitle = truncate(title, 90)
  const titleSize = safeTitle.length > 32 ? 60 : 72

  const tree = h(
    'div',
    {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '72px 80px',
      backgroundColor: '#0a0a0f',
      color: '#f2f2f7',
      fontFamily: 'Inter',
      backgroundImage:
        'radial-gradient(circle at 12% 8%, rgba(167,139,250,0.20), transparent 42%)',
    },
    [
      h(
        'div',
        { display: 'flex', fontSize: 26, fontWeight: 600, color: '#a78bfa', letterSpacing: '0.06em' },
        eyebrow,
      ),
      h(
        'div',
        { display: 'flex', flexDirection: 'column' },
        [
          h(
            'div',
            { display: 'flex', fontSize: titleSize, fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.02em' },
            safeTitle,
          ),
          ...(description
            ? [h(
                'div',
                { display: 'flex', marginTop: 24, fontSize: 30, color: '#aab0c0', lineHeight: 1.4 },
                truncate(description, 150),
              )]
            : []),
        ],
      ),
      h(
        'div',
        { display: 'flex', alignItems: 'center', fontSize: 26, color: '#828999' },
        [
          h('div', { display: 'flex', width: 14, height: 14, marginRight: 14, borderRadius: 9999, backgroundColor: '#a78bfa' }, ''),
          h('div', { display: 'flex' }, `${config.name} · ${config.role}`),
        ],
      ),
    ],
  )

  const svg = await satori(tree as never, { width: WIDTH, height: HEIGHT, fonts })
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: WIDTH } }).render().asPng()
  // Quantize to an indexed palette: our flat colors compress ~60% with no visible loss.
  return await sharp(png).png({ quality: 80, palette: true }).toBuffer()
}
