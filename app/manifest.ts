import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MPSC Free Mock",
    short_name: "MPSC Mock",
    description:
      "Free MPSC mock tests, college notes and NEET science practice for Mizoram students.",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#22d3ee",
    orientation: "portrait",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}