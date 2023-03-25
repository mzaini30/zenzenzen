<script>
  import gambar_default from "../fungsi/gambar-default";
  import olah_link from "../fungsi/olah-link";

  export let link, gambar, judul;

  link = olah_link(link);
</script>

<a href={link} class="flex gap-3">
  <img
    src={gambar || gambar_default}
    class="w-25 rounded aspect-square object-cover"
    alt="Gambar {judul}"
  />
  <div>{judul}</div>
</a>
