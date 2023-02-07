export async function get() {
  const semuaPostingan = await import.meta.glob("../post/*.mdx", {
    eager: true,
  });
  const semuaPostinganArray = Object.values(semuaPostingan);
  const semuaPostinganArrayUrut = semuaPostinganArray.sort(
    (a, b) => b.frontmatter.tanggal - a.frontmatter.tanggal
  );
  return {
    body: JSON.stringify(
      semuaPostinganArrayUrut.map((x) => ({
        url: x.url,
        judul: x.frontmatter.judul,
        ringkasan: x.frontmatter.ringkasan,
      })),
      null,
      2
    ),
  };
}
