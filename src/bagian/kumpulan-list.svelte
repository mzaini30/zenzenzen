<script>
  import JudulSegmen from "./judul-segmen.svelte";
  import semua_tulisan from "../fungsi/semua-tulisan";
  import olah_link from "../fungsi/olah-link";

  export let kategori;

  let tulisan_rapi = Object.entries(semua_tulisan).sort((a, b) => {
    return new Date(b[1].metadata.tanggal) > new Date(a[1].metadata.tanggal)
      ? 1
      : -1;
  });

  function filter_kategori(kategori) {
    return tulisan_rapi.filter((x) => x[1].metadata.kategori == kategori);
  }
  let ambil_lima = filter_kategori(kategori).slice(0, 5);
</script>

<div>
  <div class="mb-4">
    <JudulSegmen teks={kategori} />
  </div>
  <ul class="grid grid-cols-1 gap-4 text-sm">
    {#each ambil_lima as x}
      <li>
        <a href={olah_link(x[0])} class="hover:text-red-700"
          >{x[1].metadata.judul}</a
        >
      </li>
    {/each}
    <li>
      <a href="/kategori/{kategori}" class="text-red-500">Selengkapnya &rarr;</a
      >
    </li>
  </ul>
</div>
