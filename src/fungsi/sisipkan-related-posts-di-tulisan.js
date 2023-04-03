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

  // let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // let B = [11, 12, 13, 14];
  let result = [];

  let maxLength = Math.max(yang_nggak_diawali_p.length, sisipan.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < yang_nggak_diawali_p.length) {
      result.push(yang_nggak_diawali_p[i]);
    }
    if (i < sisipan.length) {
      result.push(sisipan[i]);
    }
  }

  result = result.join("");

  return result;
}
