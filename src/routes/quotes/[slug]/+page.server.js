import { createSlugFromPath } from '$lib/index.js'
import { error } from '@sveltejs/kit';


export function load({params}) {
    const slug = params.slug
    const paths = import.meta.glob(`/quotes/*.{md,svx}`, { eager: true })
    let quote, metadata

    for (const [path, resolver] of Object.entries(paths)) {
        if (createSlugFromPath(path) === slug) {
            quote = resolver.default.render(path)
            metadata = paths[path].metadata
        }
    }

    if (!quote) {
        error(404, "Not found")
    }


    return {
        title: metadata?.title,
        slug: slug,
        quote: quote.html
    }
}
