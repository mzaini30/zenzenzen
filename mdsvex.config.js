import { defineMDSveXConfig as defineConfig } from "mdsvex";
import rehype_external_links from "rehype-external-links";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx", ".mdx"],
  layout: "./src/layout/blog.svelte",

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [],
  rehypePlugins: [
    rehype_external_links({
      rel: ["dofollow"],
    }),
  ],
});

export default config;
