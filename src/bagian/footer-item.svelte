<script>
  export let data;
  export let judul;
  export let link_selengkapnya;
</script>

<div>
  <div class="uppercase text-left font-bold">{judul}</div>
  <ul class="text-left ml-5">
    {#each data.sort((a, b) => (a.teks > b.teks ? 1 : -1)).splice(0, 5) as x}
      <li class="list-disc"><a href={x.link}>{x.teks}</a></li>
    {/each}
  </ul>
  <p class="text-left"><a href={link_selengkapnya}>Selengkapnya &rarr;</a></p>
</div>
