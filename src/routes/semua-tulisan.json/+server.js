export const prerender = true;

import semua_tulisan from "../../fungsi/semua-tulisan";

export async function GET() {
  let tulisannya = Object.entries(semua_tulisan);

  let tulisan_json = [];
  for (let x of tulisannya) {
    tulisan_json.push(
      x[0]
        .replace("../routes/", "https://zenzen.web.id/")
        .replace("/+page.mdx", "")
    );
  }

  return new Response(JSON.stringify(tulisan_json, null, 2), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
