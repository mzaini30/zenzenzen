import { readFileSync } from "fs";

const semuaPostingan = await import.meta.glob("../../post/*.mdx", {
  eager: true,
});
const semuaPostinganArray = Object.values(semuaPostingan);

export async function getStaticPaths() {
  let hasil = [];

  for (let x of semuaPostinganArray) {
    hasil.push({
      params: {
        slug: x.url.replace("/post/", ""),
      },
    });
  }
  return hasil;
}

export async function get({ params }) {
  const postingan = semuaPostinganArray.find(
    (x) => x.url === "/post/" + params.slug
  );

  const isiFile = readFileSync(postingan.file).toString();

  return {
    body: JSON.stringify(isiFile, null, 2),
  };
}
