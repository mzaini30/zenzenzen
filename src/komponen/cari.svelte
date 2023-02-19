<script>
  let yangDicari = location.search.replace("?", "");
  yangDicari = decodeURIComponent(yangDicari);

  let hasil = [];

  function acak() {
    let bagi = +new Date() % 2;
    return bagi == 0;
  }

  if (localStorage[`hasilCari_${yangDicari}`] && acak()) {
    hasil = JSON.parse(localStorage[`hasilCari_${yangDicari}`]);
  } else {
    mulaiCari();
  }

  async function mulaiCari() {
    let semuaPostingan;
    if (localStorage.semuaPostingan && acak()) {
      semuaPostingan = JSON.parse(localStorage.semuaPostingan);
      cariPostingan();
    } else {
      let res = await fetch("/json/all.json");
      semuaPostingan = await res.json();
      if (semuaPostingan) {
        cariPostingan();
      }
      localStorage.semuaPostingan = JSON.stringify(semuaPostingan);
    }

    async function cariPostingan() {
      for (let postingan of semuaPostingan) {
        if (
          localStorage[`postingan_${postingan.url.replace("/post/", "")}`] &&
          acak()
        ) {
          const isi =
            localStorage[`postingan_${postingan.url.replace("/post/", "")}`];
          if (isi.toLowerCase().includes(yangDicari.toLowerCase())) {
            hasil = [...hasil, postingan];
          }
        } else {
          const res = await fetch(`/json${postingan.url}.json`);
          const isi = await res.text();
          if (isi.toLowerCase().includes(yangDicari.toLowerCase())) {
            hasil = [...hasil, postingan];
          }
          localStorage[`postingan_${postingan.url.replace("/post/", "")}`] =
            isi;
        }
      }
      localStorage[`hasilCari_${yangDicari}`] = JSON.stringify(hasil);
    }
  }
</script>

{#if hasil}
  <p class="mb-2 rounded p-2 shadow bg-white">Hasil cari {yangDicari}</p>
  {#each hasil as x}
    <a href={x.url} class="rounded p-2 bg-white block shadow mb-2 last:mb-0">
      <h2 class="font-bold uppercaseeee">{x.judul}</h2>
      <p class="text-sm">{x.ringkasan}</p>
    </a>
  {/each}
{/if}
