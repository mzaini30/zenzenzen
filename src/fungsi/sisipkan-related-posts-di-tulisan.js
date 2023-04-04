import { browser } from "$app/environment";
import semua_tulisan from "./semua-tulisan";
import { acak } from "kumpulan-tools";

let banyak_postingan_lainnya_yang_diambil = 3;

export default function (teks, kategori) {
  let tulisan_semuanya = Object.entries(semua_tulisan).filter(
    (x) => x[1].metadata.kategori == kategori
  );
  tulisan_semuanya = acak(tulisan_semuanya);
  tulisan_semuanya = tulisan_semuanya.slice(
    0,
    banyak_postingan_lainnya_yang_diambil
  );

  let teks_potong = teks.split("</p> <p>");
  let yang_nggak_diawali_p = [];
  for (let x of teks_potong) {
    yang_nggak_diawali_p.push(
      `<p>${x.replace(/^\<p\>/, "").replace(/\<\/p\>$/, "")}</p>`
    );
  }

  let sisipan = [];
  for (let x of tulisan_semuanya) {
    sisipan.push(`<p class="sisipan">
    <span class="info-sisipan">Baca juga: </span>
    <a href="${x[0]
      .replace(`../routes`, "")
      .replace(`/+page.mdx`, "")}" class="link-sisipan">${
      x[1]?.metadata?.judul
    }</a>
    </p>`);
  }

  let banyak, sedikit;

  if (yang_nggak_diawali_p.length > sisipan.length) {
    banyak = yang_nggak_diawali_p;
    sedikit = sisipan;
  } else {
    banyak = sisipan;
    sedikit = yang_nggak_diawali_p;
  }

  const jarak = Math.floor(banyak.length / sedikit.length);
  const posisi_awal = Math.floor((banyak.length - sedikit.length * jarak) / 2);

  let posisi = posisi_awal;
  for (let i = 0; i < sedikit.length; i++) {
    banyak[posisi] = sedikit[i];
    posisi += jarak;
  }

  let result = banyak.join("");

  return result;
}
