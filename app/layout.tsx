// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";

import { Josefin_Sans } from "next/font/google";
import ClientLayout from "./client-layout";
import RootLayoutComponent from "components/layout/RootLayout";
import Header from "components/layout/Header";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin-sans",
});

const siteUrl = "https://dxg-digital.vercel.app";
const ogImageUrl = `${siteUrl}/og-image.png`;

/* ---------------- METADATA ---------------- */

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ninja Marketing Solution",
  description: "Ninja Marketing Solution",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Ninja Marketing Solution",
    description: "Ninja Marketing Solution",
    url: siteUrl,
    siteName: "Ninja Marketing Solution",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Ninja Marketing Solution Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ninja Marketing Solution",
    description: "Ninja Marketing Solution",
    images: [ogImageUrl],
  },
};

/* ---------------- ROOT LAYOUT ---------------- */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={josefinSans.variable}>
      <body>
        {/* NoScript Fallback */}
        <noscript>
          <style>
            {`
              * {
                opacity: 1 !important;
                transform: none !important;
              }
            `}
          </style>
        </noscript>

        <RootLayoutComponent>
          <Header />
          <ClientLayout>{children}</ClientLayout>
          {/* <Footer /> */}
        </RootLayoutComponent>
      </body>
    </html>
  );
}
