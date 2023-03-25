<script>
  import iklan from "../gambar/your_ad_here_banner.jpg";
  import KumpulanList from "./kumpulan-list.svelte";
</script>

<div
  class="last:[&>*]:sticky last:[&>*]:top-19 last:[&>*]:mb-0 [&>*]:mb-5 [&>*]:block"
>
  <a href="https://wa.me/6281545143654">
    <img src={iklan} alt="Pasang iklan" />
  </a>
  <div>
    <KumpulanList kategori="marketing" />
  </div>
  <a href="https://brtnetwork.id"
    ><img
      src="https://brtnetwork.id/wp-content/uploads/2023/03/logo-BRTNetwork.webp"
      alt="Logo Komunitas BRT Network"
      title="Komunitas BRT Network"
      width="220"
    /></a
  >
  <a href="https://wa.me/6281545143654">
    <img src={iklan} alt="Pasang iklan" />
  </a>
</div>
