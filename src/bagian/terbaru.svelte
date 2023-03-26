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
  let pemrograman_lima_pertama = filter_kategori("pemrograman").slice(0, 5);
</script>

<JudulSegmen teks="Postingan Terbaru" link_selengkapnya="/semua-postingan" />
<div class="grid grid-cols-2 gap-6 pt-3 mb-10">
  {#each tulisan_rapi.splice(0, 7) as x}
    <CardBiasa
      link={x[0]}
      gambar={x[1].metadata.gambar}
      judul={x[1].metadata.judul}
      kategori={x[1].metadata.kategori}
    />
  {/each}
  <a href="https://wa.me/6281545143654">
    <img
      src={iklan}
      alt="Iklan dulu ya"
      class="w-full aspect-video object-cover rounded"
    />
  </a>
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
