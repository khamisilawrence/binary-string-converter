import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Binary To String Converter",
  description:
    "Convert binary code to readable strings and vice versa. Input binary sequences to retrieve the corresponding ASCII text. Input strings to convert them into binary format. Encoding and decoding binary data has never been easier!",
  keywords:
    "binary converter, binary to string, string to binary, ASCII converter, data encoding, data decoding, programming tools, web application, tech utility, developer tools",
  authors: [
    { name: "Khamisi Lawrence", url: "https://github.com/khamisilawrence" },
  ],
  icons: {
    icon: "/favicon.ico", // Main favicon
    shortcut: "/favicon.ico", // Shortcut icon
    apple: "/apple-touch-icon.png", // Apple Touch Icon
    other: [
      {
        rel: "icon",
        sizes: "192x192",
        url: "/android-chrome-192x192.png", // Android icon
      },
      {
        rel: "icon",
        sizes: "512x512",
        url: "/android-chrome-512x512.png", // Android icon
      },
      {
        rel: "icon",
        sizes: "16x16",
        url: "/favicon-16x16.png", // Android icon
      },
      {
        rel: "icon",
        sizes: "512x512",
        url: "/favicon-32x32.png", // Android icon
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col justify-evenly min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
