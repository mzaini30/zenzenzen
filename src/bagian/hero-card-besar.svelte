<script>
  import semua_tulisan from "../fungsi/semua-tulisan";
  import { acak } from "kumpulan-tools";
  import CardBesar from "../card/besar.svelte";
  import Cetak from "../fungsi/cetak.svelte";
  import gambar_default from "../fungsi/gambar-default";

  let tulisannya = Object.entries(semua_tulisan);
  tulisannya = acak(tulisannya)[0];

  let link = tulisannya[0];
  let judul = tulisannya[1].metadata.judul;
  let gambar = tulisannya[1].metadata.gambar;
</script>

<div
  class="mx-auto w-270 max-w-[95%] pt-5 [&_img]:aspect-[10/5] [&_.latar]:aspect-[10/5] [&_.wadah]:pb-[50%] sm:[&_img]:aspect-[10/3] sm:[&_.latar]:aspect-[10/3] sm:[&_.wadah]:pb-[30%]"
>
  <CardBesar {link} {judul} gambar={gambar || gambar_default} />
</div>
