// remark-remove-nofollow.mjs
import { selectAll } from "hast-util-select";
import { rehypeDom } from "rehype-dom";
import { visit } from "unist-util-visit";

function removeNofollow(options = {}) {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName === "a") {
        const href = node.properties && node.properties.href;
        const rel = node.properties && node.properties.rel;

        if (href && rel && rel.includes("nofollow")) {
          delete node.properties.rel;
          const html = rehypeDom.processSync(node);
          const link = selectAll("a", html)[0];
          node.children = link.children;
        }
      }
    });
  };
}

export default removeNofollow;
