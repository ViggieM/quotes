<script>
  export let data
</script>

<main>
  <h1 class="text-xl">Quotes</h1>

  <div class="grid md:grid-cols-3 gap-2">
    {#each data.quotes as quote}
      <article class="border rounded p-2">

        <div class="flex gap-2 mb-2">
          <h2>{quote.title}</h2>
          <a href="{quote.url}">
            <span class="text-xs underline text-teal-400 italic">read</span>
          </a>
        </div>

        {#if quote.tags}
          <ul class="flex gap-1">
            {#each quote.tags as tag}
              <li class="border px-2 py-1 bg-yellow-200 text-xs rounded">{tag}</li>
            {/each}
          </ul>
        {/if}
      </article>
    {/each}
  </div>
</main>
