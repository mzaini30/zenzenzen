import { defineMDSveXConfig as defineConfig } from "mdsvex";
// import rehype_external_links from "rehype-external-links";
// import remove_nofollow from "./remove-nofollow.js";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx", ".mdx"],
  layout: "./src/layout/blog.svelte",

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [
    // remove_nofollow()
    // rehype_external_links({
    //   rel: ["dofollow"],
    // }),
  ],
  rehypePlugins: [],
});

export default config;
