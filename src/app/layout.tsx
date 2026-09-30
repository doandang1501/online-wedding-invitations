import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Jost({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phương Anh & Minh Tuấn — Wedding Invitation",
  description:
    "Wedding invitation of Phương Anh & Minh Tuấn — 25.10.2026 at Nhà hàng Monami.",
  openGraph: {
    title: "Phương Anh & Minh Tuấn — Wedding Invitation",
    description:
      "Wedding invitation of Phương Anh & Minh Tuấn — 25.10.2026 at Nhà hàng Monami.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f3ede3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
