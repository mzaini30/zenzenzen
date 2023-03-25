import { glob } from "glob";
import { readFile, writeFile, mkdir } from "fs/promises";

const files = await glob("./src/postingan/*.mdx");

for (let x of files) {
  const isinya = await readFile(x, "utf-8");
  let jalur_baru = x
    .replace("src\\postingan", "src\\routes\\post")
    .replace(".mdx", "\\+page.mdx");
  await mkdir(jalur_baru.replace("\\+page.mdx", ""), { recursive: true });
  await writeFile(jalur_baru, isinya);
}
