import semua_tulisan from "../../../fungsi/semua-tulisan";

export function load({ params }) {
  let tulisannya = Object.entries(semua_tulisan);

  tulisannya = tulisannya.filter(
    (x) => x[1].metadata.kategori === params.kategori
  );
  return {
    hasil: tulisannya,
    kategori: params.kategori
  };
}
