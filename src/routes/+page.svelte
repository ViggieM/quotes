<script>
  export let data
</script>

<h1>Quotes</h1>

{#each data.quotes as quote}
    <div>
        <h2>{quote.meta.title}</h2>
        <p>{quote.slug}</p>
        <p>{quote.meta.tags}</p>
    </div>
{/each}
