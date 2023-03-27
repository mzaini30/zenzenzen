<script>
  import Cetak from "../fungsi/cetak.svelte";
  import { acak } from "kumpulan-tools";
  import Tablet from "./tablet.svelte";
  import gambar_default from "../fungsi/gambar-default";
  import semua_tulisan from "../fungsi/semua-tulisan";
  import olah_link from "../fungsi/olah-link";

  let semua_postingan = semua_tulisan;
  //   let semua_postingan = import.meta.glob("../postingan/*.mdx", {
  //     eager: true,
  //   });
  semua_postingan = Object.entries(semua_postingan);
  let postingan_terpilih = acak(semua_postingan)[0];
  // let link = postingan_terpilih[0]
  //   .replace("../postingan/", "/post/")
  //   .replace(".mdx", "");
  let link = olah_link(postingan_terpilih[0]);
  let nilai = postingan_terpilih[1].metadata;
  /* 
  {
    "judul": "Cara Membuat Live Kajian",
    "ringkasan": "Ternyata mudah menyiapkannya dan nggak ribet",
    "tanggal": "2023-02-23T21:14:03.000Z",
    "kategori": "dakwah",
    "gambar": "https://i.pinimg.com/originals/c5/a8/50/c5a850ad501c0389e1516bdfc261e947.jpg"
    }
  */
</script>

<div class="hidden sm:block bg-green-500 w-full text-white ">
  <div class="mx-auto w-270 grid grid-cols-2">
    <a href={link}>
      <img
        class="w-full aspect-video object-cover"
        src={nilai.gambar || gambar_default}
        alt="Gambar {nilai.judul}"
        width="640"
        height="427"
      />
    </a>
    <div class="p-5 flex items-center">
      <div class="grid grid-cols-1 gap-3">
        <Tablet link="/kategori/{nilai.kategori}" teks={nilai.kategori} />
        <a href={link} class="text-3xl block">{nilai.judul}</a>
        <div class="invisible">
          <Tablet link="/kategori/{nilai.kategori}" teks={nilai.kategori} />
        </div>
      </div>
    </div>
  </div>
</div>
