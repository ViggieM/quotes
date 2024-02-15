import {quotes} from '$lib/index.js'
import {error} from '@sveltejs/kit';


export function load({params}) {
  const slug = params.slug

  for (let quote of quotes) {
    if (quote.slug === slug) {
      return quote
    }
  }

  error(404, "Not found")
}
