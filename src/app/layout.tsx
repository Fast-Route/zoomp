import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import amazon from "@/utils/customFont";

export const metadata: Metadata = {
  title: "Zoomp",
  description: "Your route, your way!",
  icons: [
    {
      url: "/16.png",
      rel: "icon",
      type: "image/png",
      href: "/16.png",
      sizes: "16x16",
    },
    {
      url: "/32.png",
      rel: "icon",
      type: "image/png",
      href: "/32.png",
      sizes: "32x32",
    },
    {
      url: "/192.png",
      rel: "icon",
      type: "image/png",
      href: "/192.png",
      sizes: "192x192",
    },
    {
      url: "/512.png",
      rel: "icon",
      type: "image/png",
      href: "/512.png",
      sizes: "512x512",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${amazon.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
