import { browser } from "$app/environment";
import semua_tulisan from "./semua-tulisan";
import { acak } from "kumpulan-tools";

let banyak_postingan_lainnya_yang_diambil = 3;

export default function (teks, kategori) {
  let tulisan_semuanya = Object.entries(semua_tulisan).filter(
    (x) => x[1].metadata.kategori == kategori
  );
  tulisan_semuanya = acak(tulisan_semuanya).split(
    0,
    banyak_postingan_lainnya_yang_diambil
  );

  let teks_potong = teks.split("</p> <p>");
  let yang_nggak_diawali_p = [];
  for (let x of teks_potong) {
    yang_nggak_diawali_p.push(x.replace(/^\<p\>/, "").replace(/\<\/p\>$/, ""));
  }
  return {
    yang_nggak_diawali_p,
    kategori,
    tulisan_semuanya,
  };
}
