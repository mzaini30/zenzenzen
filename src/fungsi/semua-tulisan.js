const semua_tulisan = import.meta.glob("../routes/post/*/+page.mdx", {
  eager: true,
});

export default semua_tulisan;
