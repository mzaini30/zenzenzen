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
  <p class="font-bold p-2 pb-0 uppercase text-sm">Hasil cari {yangDicari}</p>
  <div class="p-2 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
    {#each hasil as x}
      <a
        href={x.url}
        class="border-2  border-black block p-2"
        style="box-shadow: 2px 2px 0 0 black"
      >
        <h2 class="font-bold text-lg">{x.judul}</h2>
        <p class="text-sm">{x.ringkasan}</p>
      </a>
    {/each}
  </div>
{/if}
