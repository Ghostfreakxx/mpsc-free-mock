import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MPSC Free Mock Learning Space",
    short_name: "MPSC Learn",
    description:
      "MPSC practice, study planning and learning resources for Mizoram students.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f6f3",
    theme_color: "#173e34",
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

