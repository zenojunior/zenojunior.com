/**
 * Short, plain-language explanations for the technology tags used across
 * projects. Keys are the lowercased tag values. Used both at build time
 * (to decide which chips are interactive) and on the client (tooltip text).
 */
export const glossary: Record<string, string> = {
  'vue': 'A progressive JavaScript framework for building user interfaces, known for its approachable reactivity model and single-file components.',
  'react': 'A JavaScript library by Meta for building UIs from composable, reusable components driven by state.',
  'typescript': 'A typed superset of JavaScript that adds static types, catching errors before runtime and improving editor tooling.',
  'next.js': 'A React framework with file-based routing, server-side rendering, and full-stack capabilities out of the box.',
  'tailwindcss': 'A utility-first CSS framework that styles elements through composable classes directly in the markup.',
  'socket.io': 'A library for real-time, bidirectional communication between client and server over WebSockets with automatic fallbacks.',
  'stencil': 'A toolchain for building standards-based Web Components that work in any framework or none at all.',
  'web-components': 'A set of native browser APIs (custom elements, shadow DOM) for creating reusable, encapsulated HTML elements.',
  'open-source': 'Software released under a license that lets anyone view, use, modify, and contribute to the source code.',
  'civic-tech': 'Technology built to serve the public good — improving communities, public services, or civic engagement.',
}
