# Cath Fairy Luxe Seller Center

Starter project dashboard untuk mengelola operasional Shopee dan TikTok Shop dari satu tempat.

## Isi tahap awal
- Dashboard responsif untuk HP, tablet, dan desktop.
- Tampilan status koneksi Shopee dan TikTok Shop.
- Contoh katalog produk.
- Rancangan menu pesanan, scan barcode, foto paket, dan karyawan.
- Skema database awal Supabase.

## Penting
Tampilan ini masih tahap awal dengan data contoh. Tombol koneksi marketplace belum melakukan autentikasi atau sinkronisasi sungguhan. Integrasi resmi Shopee dan TikTok Shop memerlukan akun developer/partner, persetujuan aplikasi, kredensial API, dan pengujian. Jangan memasukkan password marketplace ke dalam aplikasi ini.

## Menjalankan project
Memerlukan Node.js 20 atau lebih baru.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Buka http://localhost:3000.

## Supabase
1. Buat project Supabase.
2. Jalankan isi `supabase/schema.sql` di SQL Editor.
3. Isi URL dan anon key pada `.env.local`.
4. Sebelum data nyata dipakai, konfigurasi Auth, Storage, Row Level Security, dan kebijakan akses tim.

## Deployment
Project ini disiapkan untuk GitHub dan deployment Next.js di Vercel. Tambahkan environment variables Supabase di pengaturan project deployment.
