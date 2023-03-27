<script>
  import "@unocss/reset/tailwind.css";
  import "uno.css";
  import Head from "../bagian/head.svelte";
  import { page } from "$app/stores";
  import Cetak from "../fungsi/cetak.svelte";
</script>

<svelte:head>
  <link rel="canonical" href="https://zenzen.web.id{$page.route.id}" />
</svelte:head>
<!-- <Head /> -->
<slot />
