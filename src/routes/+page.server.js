function createSlugFromPath(path) {
  return path.match(/([\w-]+)\.(md|svx)/i)?.[1] ?? null;
}

export function load() {
  let quotes = []

  const paths = import.meta.glob(`/quotes/*.{md,svx}`, { eager: true })

  for (const path in paths) {
    const file = paths[path]
    quotes.push({
      meta: file.metadata,
      slug: createSlugFromPath(path),
    })
  }
  return {
    quotes: quotes
  }
}
