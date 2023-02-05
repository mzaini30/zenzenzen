<script>
  import { sql, komentar } from "../data/api";
  import excalibur from "excalibur-zen";
  import { url } from "gravatar";

  export let slug;

  Notification.requestPermission();

  let nama, email, komentarnya;
  let dataKomentar;

  if (localStorage.dataKomentar) {
    const data = JSON.parse(localStorage.dataKomentar);
    nama = data.nama;
    email = data.email;
  }

  async function kirimKomentar() {
    const mengirim = await excalibur(sql, {
      id: komentar,
      kunci: "tambah",
      nama,
      email,
      komentar: komentarnya,
      idnya: slug,
    });
    if (mengirim) {
      new Notification("Komentar berhasil dikirim");
      localStorage.dataKomentar = JSON.stringify({ nama, email });
      komentarnya = "";
      dapatkanKomentar();
    }
  }

  async function dapatkanKomentar() {
    let data = await excalibur(sql, {
      id: komentar,
      kunci: "tampil",
      idnya: slug,
    });
    data = await data.json();
    dataKomentar = data;
  }
  dapatkanKomentar();
</script>

<div class="rounded text-sm border border-gray-500 shadow">
  <div class="judul bg-gray-500 text-white p-2">Tambahkan Komentar Baru</div>
  <div class="isi p-2">
    <form
      action=""
      on:submit|preventDefault={kirimKomentar}
      class="grid grid-cols-1 gap-2"
    >
      <label for="">Nama</label>
      <input type="text" bind:value={nama} class="inputan" required />
      <label for="">Email</label>
      <input type="email" bind:value={email} required class="inputan" />
      <label for="">Komentar</label>
      <textarea
        name=""
        id=""
        bind:value={komentarnya}
        required
        cols="30"
        class="inputan"
        rows="10"
      />
      <div>
        <input
          type="submit"
          value="Kirim"
          class="bg-black cursor-pointer text-white px-3 py-1 rounded inline-block"
        />
      </div>
    </form>
  </div>
</div>

{#if dataKomentar}
  {#each dataKomentar as komentar}
    <!-- get list of commentar using gravatar as profile picture -->
    <div class="rounded text-sm border border-gray-500 shadow mt-2">
      <div class="judul bg-gray-500 text-white p-2">
        <img
          src={url(komentar.email)}
          alt=""
          class="inline-block w-8 h-8 rounded-full mr-2"
        />
        {komentar.nama}
      </div>
      <div class="isi p-2 whitespace-pre-wrap">{komentar.komentar}</div>
    </div>
  {/each}
{/if}

<style>
  .inputan {
    @apply block w-full p-2 border border-gray-300 rounded;
  }
</style>
