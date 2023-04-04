<script>
  import CardBersebelahan from "../card/bersebelahan.svelte";
  import iklan from "../gambar/your_ad_here_banner.jpg";
  import CardBesar from "../card/besar.svelte";
  import CardBiasa from "../card/biasa.svelte";
  import Cetak from "../fungsi/cetak.svelte";
  import JudulSegmen from "./judul-segmen.svelte";
  import semua_tulisan from "../fungsi/semua-tulisan";

  let tulisan_rapi = Object.entries(semua_tulisan).sort((a, b) => {
    return new Date(b[1].metadata.tanggal) > new Date(a[1].metadata.tanggal)
      ? 1
      : -1;
  });

  function filter_kategori(kategori) {
    return tulisan_rapi.filter((x) => x[1].metadata.kategori == kategori);
  }
  let pemrograman_pertama = filter_kategori("pemrograman")[0];
  let pemrograman_lima_pertama = filter_kategori("pemrograman").slice(0, 7);
</script>

<JudulSegmen teks="Postingan Terbaru" link_selengkapnya="/semua-postingan" />
<div class="pt-3 ">
  <CardBesar
    gambar={tulisan_rapi[0][1].metadata.gambar}
    judul={tulisan_rapi[0][1].metadata.judul}
    link={tulisan_rapi[0][0]}
  />
</div>
<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
  {#each tulisan_rapi.slice(0, 9) as x, n}
    {#if n != 0}
      <CardBersebelahan
        gambar={x[1].metadata.gambar}
        judul={x[1].metadata.judul}
        link={x[0]}
      />
    {/if}
  {/each}
</div>
<JudulSegmen teks="Pemrograman" link_selengkapnya="/kategori/pemrograman" />
<div class="pt-3 ">
  <CardBesar
    gambar={pemrograman_pertama[1].metadata.gambar}
    judul={pemrograman_pertama[1].metadata.judul}
    link={pemrograman_pertama[0]}
  />
</div>
<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
  {#each pemrograman_lima_pertama as x, n}
    {#if n != 0}
      <CardBersebelahan
        gambar={x[1].metadata.gambar}
        judul={x[1].metadata.judul}
        link={x[0]}
      />
    {/if}
  {/each}
</div>
