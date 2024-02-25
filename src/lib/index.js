import * as pagefind from "pagefind";

export const { index } = await pagefind.createIndex();

// place files you want to import through the `$lib` alias in this folder.
const paths = import.meta.glob(`/quotes/*.{md,svx}`, {eager: true})
export const quotes = []

for (const [path, resolver] of Object.entries(paths)) {
  const file = paths[path]
  const slug = createSlugFromPath(path)
  const quote = resolver.default.render(path)
  const data = {
    title: file.metadata?.title || generateMissingTitleFromContent(quote.html),
    html: quote.html,
    tags: file.metadata?.tags,
    slug: slug,
    url: `/quotes/${slug}`,
    meta: file.metadata,
  }
  quotes.push(data)
  index.addHTMLFile({
    url: data.url,
    content: data.html
  })
}

index.writeFiles({
  outputPath: "pagefind"
})

function generateMissingTitleFromContent(html, maxLength = 30) {
  const content = stripTags(html)
  if (content.length > maxLength) {
    return content.substring(0, maxLength) + '...';
  } else {
    return content;
  }
}

function createSlugFromPath(path) {
  return path.match(/([\w-]+)\.(md|svx)/i)?.[1] ?? null;
}

function stripTags(inputString) {
  return inputString.replace(/<\/?[^>]+(>|$)/g, "");
}
