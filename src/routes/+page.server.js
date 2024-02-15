import { createSlugFromPath, stripTags } from '$lib/index.js'


function generateMissingTitleFromContent(html, maxLength = 30) {
  const content = stripTags(html)
  if (content.length > maxLength) {
    return content.substring(0, maxLength) + '...';
  } else {
    return content;
  }
}


export function load() {
  let quotes = []

  const paths = import.meta.glob(`/quotes/*.{md,svx}`, { eager: true })

  for (const [path, resolver] of Object.entries(paths)) {
    const file = paths[path]
    const slug = createSlugFromPath(path)
    quotes.push({
      title: file.metadata?.title || generateMissingTitleFromContent(resolver.default.render(path).html),
      tags: file.metadata?.tags,
      slug: slug,
      url: `/quotes/${slug}`,
      meta: file.metadata,
    })
  }
  return {
    quotes: quotes
  }
}
