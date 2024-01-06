<script>
    export let data
</script>

<h1>Quotes</h1>

{#each data.quotes as quote}
    <div>
        <h2>{quote.meta.title}</h2>
        <a href="{quote.url}">
            <p>{quote.slug}</p>
            <p>{quote.meta.tags}</p>
        </a>
    </div>
{/each}
