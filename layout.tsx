import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cath Fairy Luxe Seller Center",
  description: "Dashboard operasional toko Shopee dan TikTok Shop Cath Fairy Luxe."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
