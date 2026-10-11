import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Narudom O-kart // Editorial Archive",
    short_name: "Narudom Archive",
    description:
      "Personal portfolio and technical archive of Narudom O-kart — Software Developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f6",
    theme_color: "#09090b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
