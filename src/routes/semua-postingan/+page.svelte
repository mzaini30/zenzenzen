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
  import KumpulanCard from "../../bagian/kumpulan-card.svelte";
  import CardBersebelahan from "../../card/bersebelahan.svelte";

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
        <div class="grid grid-cols-1 gap-5">
          {#each tulisannya as [key, value]}
            <CardBersebelahan
              judul={value.metadata.judul}
              gambar={value.metadata.gambar}
              link={olah_link(key)}
            />
            <!-- <div class="mb-5">
            <p class="text-2xl font-bold">
              <a href={olah_link(key)}>{value.metadata.judul}</a>
            </p>
            <p class="text-sm text-gray-500">{value.metadata.ringkasan}</p>
            <p class="text-sm text-gray-500">
              <a class="underline" href="/kategori/{value.metadata.kategori}"
                >{value.metadata.kategori}</a
              >
            </p>
          </div> -->
          {/each}
        </div>
      </div>
      <div class="col-span-4 sm:col-span-1 grid grid-cols-1 gap-3">
        <Sidebar />
      </div>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10 w-270 max-w-[95%] mx-auto"
    >
      <KumpulanCard kategori="dakwah" />
      <KumpulanCard kategori="pemrograman" />
    </div>
  </div>
  <Footer />
</Base>
