<script>
  export let judul;
  export let deskripsi;
  export let gambar;

  import gambar_default from "../fungsi/gambar-default";
  import { page } from "$app/stores";

  if (gambar && gambar.startsWith("/")) {
    gambar = `https://zenzen.web.id${gambar}`;
  }
</script>

<meta property="og:title" content={judul} />
<meta property="og:description" content={deskripsi} />
<meta property="og:type" content="article" />
<meta property="og:url" content="https://zenzen.web.id{$page.route.id}" />
<meta property="og:image" content={gambar || gambar_default} />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@sinyalpluang" />
<meta name="twitter:description" content={deskripsi} />
<meta name="twitter:title" content={judul} />
<meta name="twitter:image" content={gambar || gambar_default} />
