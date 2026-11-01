import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import "./theme-dark.css";
import { themeInitScript } from "./theme";
import ServiceWorkerRegister from "./service-worker-register";
import ChatLauncher from "./chat-launcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MPSC Free Mock | Learning Space",
  description:
    "A focused learning space for Mizoram students preparing for MPSC and other entrance exams.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        url: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: "/icon-192.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "MPSC Learn",
  },
};

export const viewport: Viewport = {
  themeColor: "#173e34",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Dark by default. The head script switches to light before the first paint when a student chose
    // it, so this one attribute may differ from the server's HTML.
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script>{themeInitScript}</script>
      </head>
      <body className="min-h-full flex flex-col">
        <ServiceWorkerRegister />
        {children}
        <ChatLauncher />
      </body>
    </html>
  );
}
