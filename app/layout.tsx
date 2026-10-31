import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ServiceWorkerRegister />
        {children}
        <ChatLauncher />
      </body>
    </html>
  );
}
