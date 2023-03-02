import {text} from "input"
import {writeFileSync} from "fs"
import {slug} from "kumpulan-tools"

const judul = await text("Masukkan judul:")

const template = `---
judul: "${judul}"
layout: "../../layout/post.astro"
ringkasan: ""
kategori: ""
tanggal: "2023-02-01 09:01:00"
gambar: ""
---

`

// writeFileSync(`./src/pages/post/${slug(judul)}.mdx`, `halo`)