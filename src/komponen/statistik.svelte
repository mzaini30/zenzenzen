<script>
  export let judul;

  import excaliburZen from "excalibur-zen";
  import { sql, id } from "../sql/statistik";

  let tanggalan = new Date();
  let bulan = tanggalan.getMonth() + 1;
  let tahun = tanggalan.getFullYear();

  let banyaknya;

  async function init() {
    banyaknya = await excaliburZen(sql, {
      id,
      kunci: "cek",
      judul,
      bulan,
      tahun,
    });
    banyaknya = await banyaknya.json();
    if (!banyaknya) {
      // belum ada
      let tambah_baru = await excaliburZen(sql, {
        id,
        kunci: "tambah-baru",
        judul,
        banyak: "1",
        bulan,
        tahun,
      });
    } else {
      // sudah ada
      let update_aja = await excaliburZen(sql, {
        id,
        kunci: "update-dulu",
        banyak: +banyaknya[0].banyak + 1,
        judul,
        bulan,
        tahun,
      });
    }
  }
  init();

  async function cek() {
    let terbaru = await excaliburZen(sql, {
      id,
      kunci: "ambil-terbanyak",
      bulan,
      tahun,
    });
    terbaru = await terbaru.json();
    terbaru = terbaru.sort((b, a) => +a.banyak - +b.banyak);
    console.log(JSON.stringify(terbaru, null, 2));
  }
  cek();
</script>
