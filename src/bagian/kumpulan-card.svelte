<script>
  import semua_tulisan from "../fungsi/semua-tulisan";
  import gambar_default from "../fungsi/gambar-default";
  import JudulSegmen from "./judul-segmen.svelte";
  import CardBesar from "../card/besar.svelte";
  import CardBersebelahan from "../card/bersebelahan.svelte";

  export let kategori;

  let tulisan_rapi = Object.entries(semua_tulisan).sort((a, b) => {
    return new Date(b[1].metadata.tanggal) > new Date(a[1].metadata.tanggal)
      ? 1
      : -1;
  });

  function filter_kategori(kategori) {
    return tulisan_rapi.filter((x) => x[1].metadata.kategori == kategori);
  }

  let pertama = filter_kategori(kategori)[0];
  let ambil_empat = filter_kategori(kategori).slice(0, 4);
</script>

<div>
  <div class="mb-5">
    <JudulSegmen link_selengkapnya="/kategori/{kategori}" teks={kategori} />
  </div>
  <div class="grid grid-cols-1 gap-5">
    <CardBesar
      judul={pertama[1].metadata.judul}
      link={pertama[0]}
      gambar={pertama[1].metadata.gambar || gambar_default}
    />
    {#each ambil_empat as x, n}
      {#if n != 0}
        <CardBersebelahan
          gambar={x[1].metadata.gambar}
          judul={x[1].metadata.judul}
          link={x[0]}
        />
      {/if}
    {/each}
  </div>
</div>
