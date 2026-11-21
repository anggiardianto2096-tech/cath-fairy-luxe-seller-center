
import type { ReactNode } from "react";
import "../globals.css";

export const metadata = {
  title: "Cath Fairy Luxe Seller Center",
  description: "Sistem Manajemen Toko Cath Fairy Luxe",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
