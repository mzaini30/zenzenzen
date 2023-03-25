<script>
  import gambar_default from "../fungsi/gambar-default";
  import olah_link from "../fungsi/olah-link";

  export let link, gambar, judul, kategori;

  link = olah_link(link);
</script>

<div class="[&>*]:mb-3 [&>*]:block last:[&>*]:mb-0">
  <a href={link}>
    <img
      src={gambar || gambar_default}
      class="w-full rounded aspect-video object-cover"
      alt="Gambar {judul}"
    />
  </a>
  <div>
    <a
      href="/kategori/{kategori}"
      class="text-sm bg-red-500 text-white rounded-3xl px-3 py-1">{kategori}</a
    >
  </div>
  <a href={link} class="text-lg -mt-1">{judul}</a>
</div>
