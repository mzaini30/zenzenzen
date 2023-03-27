<script>
  import gambar_default from "../fungsi/gambar-default";
  import olah_link from "../fungsi/olah-link";

  export let link, judul, gambar;

  if (link) {
    link = olah_link(link);
  }
</script>

<svelte:element
  this={link ? "a" : "div"}
  href={link || null}
  class="block relative top-0 pb-[56.25%]"
>
  <img
    src={gambar || gambar_default}
    class="w-full object-cover aspect-video rounded-lg absolute top-0"
    alt="Gambar {judul}"
    width="640"
    height="427"
  />
  <div
    class="w-full object-cover rounded-lg text-2xl p-4 aspect-video bg-gradient-to-t from-black/50 absolute top-0 grid grid-cols-1 gap-5 content-between"
  >
    <div />
    <div class="text-white">{judul}</div>
  </div>
</svelte:element>
