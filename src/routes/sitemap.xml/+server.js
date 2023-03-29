import semua_tulisan from "../../fungsi/semua-tulisan";
import gambar_default from "../../fungsi/gambar-default";

export const prerender = true;

export async function GET() {
  let tulisannya = Object.entries(semua_tulisan);

  return new Response(
    `
      <?xml version="1.0" encoding="UTF-8" ?>
      <urlset
        xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="https://www.w3.org/1999/xhtml"
        xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
      >
        ${tulisannya.map(
          (x) => `<url>
		<loc>${x[0]
      .replace("../routes/", "https://zenzen.web.id/")
      .replace("/+page.mdx", "")}</loc>
      <lastmod>${x[1].metadata.tanggal}</lastmod>
      <image:image>
			  <image:loc>${
          x[1].metadata.gambar.replace(/^\//, "https://zenzen.web.id/") ||
          gambar_default
        }</image:loc>
		</image:image>
	</url>`
        )}
      </urlset>`.trim(),
    {
      headers: {
        "Content-Type": "application/xml",
      },
    }
  );
}
