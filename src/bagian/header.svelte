<script>
  import Cetak from "../fungsi/cetak.svelte";
  import semua_tulisan from "../fungsi/semua-tulisan";
  import { goto } from "$app/navigation";

  let kategori_target;

  const semua_postingan = semua_tulisan;
  // const semua_postingan = import.meta.glob("../postingan/*.mdx", {
  //   eager: true,
  // });
  let semua_kategori = [];
  for (let x of Object.entries(semua_postingan)) {
    semua_kategori = [...semua_kategori, x[1].metadata.kategori];
  }
  semua_kategori = [...new Set(semua_kategori)].sort();

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  async function menuju(lokasi) {
    await goto(lokasi);
  }
</script>

<div
  class="bg-red-500 w-full z-999 text-white py-3 sticky top-0 hover:[&_a]:text-black"
>
  <div class="mx-auto w-270 max-w-[95%] flex justify-between">
    <h1><a href="/">Zen Zen</a></h1>
    <select
      on:change={(event) =>
        menuju(`/kategori/${event.target.value.toLowerCase()}`)}
      class="text-black px-2 sm:hidden"
    >
      <option disabled selected="selected">Menu</option>
      {#each semua_kategori as kategori}
        <option>{capitalizeFirstLetter(kategori)}</option>
      {/each}
    </select>
    <div class="sm:flex gap-3 hidden">
      {#each semua_kategori as kategori}
        <a href="/kategori/{kategori}">{kategori}</a>
      {/each}
    </div>
  </div>
</div>
