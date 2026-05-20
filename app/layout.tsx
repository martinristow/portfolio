import type { Metadata } from "next";
import { Geist, Geist_Mono, Comfortaa, Cormorant_Garamond  } from "next/font/google";

import "./globals.css";

const cormorant = Cormorant_Garamond({
    variable: "--font-cormorant",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    style: ["normal", "italic"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const comfortaa = Comfortaa({
    variable: "--font-comfortaa",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Martin Ristov Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className="h-full">
      <body className={`${cormorant.variable} h-full flex flex-col`}>
      {children}
      </body>
      </html>
  );
}
