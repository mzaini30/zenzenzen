<script>
  import Cetak from "../fungsi/cetak.svelte";
  import semua_tulisan from "../fungsi/semua-tulisan";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import Garis from "./garis-di-option.svelte";

  let kategori_target;
  const link_community = "https://chat.whatsapp.com/HoclSRlY284LidNQqItrOd";

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
    <svelte:element this={$page.route.id == "/" ? "h1" : "div"}>
      <a href="/">Zen Zen </a>
    </svelte:element>
    <select
      on:change={(event) =>
        event.target.value.startsWith("https://")
          ? (location.href = event.target.value)
          : menuju(`/kategori/${event.target.value.toLowerCase()}`)}
      class="text-black px-2 sm:hidden"
    >
      <option disabled selected="selected">Menu</option>
      <Garis />
      {#each semua_kategori as kategori}
        <option>{capitalizeFirstLetter(kategori)}</option>
      {/each}
      <Garis />
      <option value={link_community}>Join Community</option>
    </select>
    <div class="sm:flex gap-3 hidden">
      {#each semua_kategori as kategori}
        <a href="/kategori/{kategori}">{kategori}</a>
      {/each}
      <a class="font-bold" href={link_community}>join community</a>
    </div>
  </div>
</div>
