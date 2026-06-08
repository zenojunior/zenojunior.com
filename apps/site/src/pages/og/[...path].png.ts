import type { APIRoute, GetStaticPaths } from 'astro'
import { getCollection } from 'astro:content'
import { config } from '../../config'
import { renderOgImage } from '../../lib/og'

const SITE = 'zenojunior.com'

export const getStaticPaths: GetStaticPaths = async () => {
  const [notes, projects] = await Promise.all([
    getCollection('notes'),
    getCollection('projects'),
  ])

  return [
    { params: { path: 'index' }, props: { eyebrow: SITE, title: config.name, description: config.role } },
    { params: { path: 'notes' }, props: { eyebrow: `${SITE} / notes`, title: 'Notes', description: 'Notes about web development, tools, and things I learn.' } },
    { params: { path: 'projects' }, props: { eyebrow: `${SITE} / projects`, title: 'Projects', description: 'Timeline of projects and professional experiences.' } },
    { params: { path: 'cv' }, props: { eyebrow: SITE, title: 'CV', description: config.role } },
    { params: { path: 'bookmarkflow' }, props: { eyebrow: `${SITE} / bookmark flow`, title: 'Bookmark Flow', description: 'Turn your new tab into a visual board to organize bookmarks as draggable folder cards.' } },
    { params: { path: 'bookmarkflow/privacy' }, props: { eyebrow: `${SITE} / bookmark flow`, title: 'Privacy Policy', description: 'No account, no server, no analytics. Your data stays on your device.' } },
    ...notes.map(note => ({
      params: { path: `notes/${note.id}` },
      props: { eyebrow: `${SITE} / notes`, title: note.data.title, description: note.data.description },
    })),
    ...projects.map(project => ({
      params: { path: `projects/${project.id}` },
      props: { eyebrow: `${SITE} / projects`, title: project.data.title, description: project.data.description },
    })),
  ]
}

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOgImage(props as Parameters<typeof renderOgImage>[0])
  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
