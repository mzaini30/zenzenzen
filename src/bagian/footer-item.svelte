<script>
  export let data;
  export let judul;
</script>

<div>
  <div class="uppercase">{judul}</div>
  <ol class="text-justify">
    {#each data.sort((a, b) => (a.teks > b.teks ? 1 : -1)).splice(0, 5) as x}
      <li><a href={x.link}>{x.teks}</a></li>
    {/each}
  </ol>
</div>
