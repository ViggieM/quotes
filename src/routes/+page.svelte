<script>
  export let data
</script>

<h1>Quotes</h1>

{#each data.quotes as quote}
  <article>
    <a href="{quote.url}">
      <h2>{quote.title}</h2>
    </a>
    {#if quote.tags}
      <ul>
        {#each quote.tags as tag}
          <li>{tag}</li>
        {/each}
      </ul>
    {/if}
  </article>
{/each}
