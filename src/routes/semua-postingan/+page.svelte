<script>
  import Base from "../../layout/base.svelte";
  import Header from "../../bagian/header.svelte";
  import Sidebar from "../../bagian/sidebar.svelte";
  import KumpulanList from "../../bagian/kumpulan-list.svelte";
  import Footer from "../../bagian/footer.svelte";
  import JudulSegmen from "../../bagian/judul-segmen.svelte";
  import semua_tulisan from "../../fungsi/semua-tulisan";
  import Cetak from "../../fungsi/cetak.svelte";
  import olah_link from "../../fungsi/olah-link";
  import { MetaTags } from "svelte-meta-tags";
  import Sosial from "../../bagian/meta-sosial.svelte";

  let tulisannya = Object.entries(semua_tulisan);

  const judul = "Semua Postingan";
  const deskripsi = "Semua postingan di blog ini, ada di sini";
</script>

<svelte:head>
  <Sosial {judul} {deskripsi} />
</svelte:head>

<MetaTags title={judul} description={deskripsi} />

<Base>
  <Header />
  <div class="py-7">
    <div class="grid grid-cols-4 gap-7 max-w-[95%] w-270 mx-auto">
      <div class="col-span-4 sm:col-span-3 ">
        <div class="mb-5">
          <JudulSegmen tag="h1" teks="Semua Postingan" />
        </div>
        {#each tulisannya as [key, value]}
          <div class="mb-5">
            <p class="text-2xl font-bold">
              <a href={olah_link(key)}>{value.metadata.judul}</a>
            </p>
            <p class="text-sm text-gray-500">{value.metadata.ringkasan}</p>
            <p class="text-sm text-gray-500">
              <a class="underline" href="/kategori/{value.metadata.kategori}"
                >{value.metadata.kategori}</a
              >
            </p>
          </div>
        {/each}
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
