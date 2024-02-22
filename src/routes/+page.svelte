<script>
  export let data
</script>

<main>
  <h1 class="text-xl">Quotes</h1>

  <div class="grid md:grid-cols-3 gap-2">
    {#each data.quotes as quote}
      <a href="{quote.url}">
        <article class="border rounded p-2">

          <h2 class="mb-2">{quote.title}</h2>

          {#if quote.tags}
            <ul class="flex gap-1">
              {#each quote.tags as tag}
                  <li class="border bg-yellow-200 text-xs rounded">
                    <a class="block px-2 py-1" href="#">{tag}</a>
                  </li>
              {/each}
            </ul>
          {/if}
        </article>
      </a>
    {/each}
  </div>
</main>
