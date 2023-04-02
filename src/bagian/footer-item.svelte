<script>
  export let data;
  export let judul;
  export let link_selengkapnya;
</script>

<div class="[&_*]:mb-1 last:[&_*]:mb-1">
  <div class="uppercase text-left font-bold">{judul}</div>
  <ul class="text-left ml-5">
    {#each data.sort((a, b) => (a.teks > b.teks ? 1 : -1)).slice(0, 5) as x}
      <li class="list-disc capitalize">
        <a class="hover:underline" href={x.link}>{x.teks}</a>
      </li>
    {/each}
  </ul>
  <p class="text-left">
    <a class="hover:underline" href={link_selengkapnya}>Selengkapnya &rarr;</a>
  </p>
</div>
