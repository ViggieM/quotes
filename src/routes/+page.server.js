import { createSlugFromPath } from '$lib/index.js'


export function load() {
  let quotes = []

  const paths = import.meta.glob(`/quotes/*.{md,svx}`, { eager: true })

  for (const path in paths) {
    const file = paths[path]
    const slug = createSlugFromPath(path)
    quotes.push({
      meta: file.metadata,
      slug: slug,
      url: `/quotes/${slug}`
    })
  }
  return {
    quotes: quotes
  }
}
