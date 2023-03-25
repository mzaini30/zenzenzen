<script>
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

  export let judul, ringkasan, gambar;

  let slug = "";
  if (browser) {
    slug = window.location.pathname;
  }
</script>

<MetaTags title={judul} description={ringkasan} />

<Base>
  <Header />
  <div class="py-7">
    <div class="grid grid-cols-4 gap-7 w-270 max-w-[95%] mx-auto">
      <div
        class="col-span-4 sm:col-span-3 [&_iframe]:max-w-full prose max-w-full"
      >
        <CardBesar {judul} {gambar} />
        <slot />
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
      <KumpulanList kategori="renungan" />
    </div>
  </div>
  <Footer />
</Base>
