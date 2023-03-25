export default function (linknya) {
  return linknya
    .replace("/routes/", "/")
    .replace("/+page", "")
    .replace(".mdx", "");
}
