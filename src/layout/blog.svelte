<script>
  export let judul, ringkasan, gambar, kategori;

  import Base from "./base.svelte";
  import Header from "../bagian/header.svelte";
  import Sidebar from "../bagian/sidebar.svelte";
  import KumpulanList from "../bagian/kumpulan-list.svelte";
  import Footer from "../bagian/footer.svelte";
  import Komentar from "../bagian/komentar.svelte";
  import { browser } from "$app/environment";
  import { MetaTags } from "svelte-meta-tags";
  import gambar_default from "../fungsi/gambar-default";
  import CardBesar from "../card/besar.svelte";
  import "../style/prism.css";
  import Sosial from "../bagian/meta-sosial.svelte";
  import Cetak from "../fungsi/cetak.svelte";
  import sisipkan_related_posts from "../fungsi/sisipkan-related-posts-di-tulisan";

  let isinya;
  let hasilnya;

  $: if (isinya) {
    hasilnya = sisipkan_related_posts(isinya?.innerHTML, kategori);
  }

  let slug = "";
  if (browser) {
    slug = window.location.pathname;
  }
</script>

<svelte:head>
  <Sosial {judul} deskripsi={ringkasan} {gambar} />
</svelte:head>

<MetaTags title={judul} description={ringkasan} />

<Base>
  <!-- <Cetak data={hasilnya} /> -->
  <Header />
  <div class="py-7">
    <div class="grid grid-cols-4 gap-7 w-270 max-w-[95%] mx-auto">
      <div class="col-span-4 sm:col-span-3 [&_iframe]:max-w-full ">
        <CardBesar {judul} {gambar} />
        <div
          class="prose max-w-full [&_img]:mx-auto [&_img]:block [&_img]:rounded [&_img]:border [&_iframe]:mx-auto [&_iframe]:block [&_iframe]:rounded [&_.sisipan]:p-3 [&_.sisipan]:bg-red-100 [&_.sisipan]:rounded"
        >
          {#if !hasilnya}
            <div bind:this={isinya}>
              <slot />
            </div>
          {:else}
            {@html hasilnya}
          {/if}
        </div>
        <Komentar {slug} />
      </div>
      <div class="col-span-4 sm:col-span-1 grid grid-cols-1 gap-3">
        <Sidebar />
      </div>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-10 max-w-[95%] w-270 mx-auto"
    >
      <KumpulanList kategori="psikologi" />
      <KumpulanList kategori="dakwah" />
      <KumpulanList kategori="pemrograman" />
    </div>
  </div>
  <Footer />
</Base>
