"use client";

import { useState } from "react";
import {
  LayoutDashboard, ShoppingBag, Package, ScanLine, Camera, Users,
  Settings, Search, Bell, ChevronDown, Plus, ArrowUpRight, Clock3,
  CheckCircle2, Truck, CircleAlert, Menu, X, Store, Link2
} from "lucide-react";

const products = [
  { name: "Jepit Rambut Mini Pastel", sku: "CFL-JP-001", stock: 128, price: "Rp12.000", status: "Aktif" },
  { name: "Bando Pita Korea", sku: "CFL-BD-014", stock: 64, price: "Rp18.500", status: "Aktif" },
  { name: "Ikat Rambut Anak Isi 50", sku: "CFL-IR-050", stock: 9, price: "Rp9.900", status: "Stok menipis" }
];

export default function Home() {
  const [active, setActive] = useState("Ringkasan");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notice, setNotice] = useState("");

  const nav = [
    { label: "Ringkasan", icon: LayoutDashboard },
    { label: "Produk", icon: Package },
    { label: "Pesanan", icon: ShoppingBag },
    { label: "Scan Barcode", icon: ScanLine },
    { label: "Foto Paket", icon: Camera },
    { label: "Karyawan", icon: Users },
    { label: "Pengaturan", icon: Settings }
  ];

  const selectNav = (label: string) => {
    setActive(label);
    setMobileOpen(false);
    if (label !== "Ringkasan") setNotice(`${label} dipilih. Modul ini akan kita aktifkan pada tahap berikutnya.`);
    else setNotice("");
  };

  return (
    <main className="shell">
      <aside className={`sidebar ${mobileOpen ? "show" : ""}`}>
        <div className="brand">
          <div className="brand-mark">CF</div>
          <div><strong>Cath Fairy Luxe</strong><span>SELLER CENTER</span></div>
          <button className="close-menu" onClick={() => setMobileOpen(false)} aria-label="Tutup menu"><X size={19}/></button>
        </div>
        <div className="workspace-label">WORKSPACE</div>
        <div className="workspace"><div className="workspace-icon"><Store size={18}/></div><div><b>Toko Utama</b><small>2 kanal penjualan</small></div><ChevronDown size={16}/></div>
        <nav>
          {nav.map(({ label, icon: Icon }) => (
            <button key={label} onClick={() => selectNav(label)} className={`nav-item ${active === label ? "active" : ""}`}>
              <Icon size={18}/><span>{label}</span>
              {label === "Pesanan" && <i className="nav-count">8</i>}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="help-card"><div className="help-dot">?</div><b>Butuh bantuan?</b><p>Pengaturan toko dan panduan penggunaan.</p><button onClick={() => setNotice("Panduan penggunaan akan ditambahkan.")}>Lihat panduan <ArrowUpRight size={14}/></button></div>
          <div className="profile"><div className="avatar">A</div><div><b>Anggi</b><small>Administrator</small></div><MoreDots/></div>
        </div>
      </aside>

      {mobileOpen && <button className="scrim" onClick={() => setMobileOpen(false)} aria-label="Tutup menu"/>}

      <section className="main">
        <header className="topbar">
          <button className="mobile-menu" onClick={() => setMobileOpen(true)} aria-label="Buka menu"><Menu/></button>
          <div className="crumb">Workspace <span>/</span> <b>{active}</b></div>
          <div className="top-actions"><button className="icon-button" aria-label="Cari"><Search size={18}/></button><button className="icon-button notification" aria-label="Notifikasi"><Bell size={18}/><i/></button><div className="top-avatar">A</div></div>
        </header>

        <div className="content">
          <div className="welcome-row">
            <div><div className="eyebrow">SABTU, 21 NOVEMBER 2026</div><h1>Selamat datang, Anggi</h1><p>Kelola operasional kedua tokomu dari satu tempat.</p></div>
            <button className="primary" onClick={() => { setActive("Produk"); setNotice("Form tambah produk akan kita buat pada tahap berikutnya."); }}><Plus size={17}/> Tambah Produk</button>
          </div>

          {notice && <div className="notice"><CircleAlert size={17}/><span>{notice}</span><button onClick={() => setNotice("")}>Tutup</button></div>}

          <section className="channels">
            <div className="section-heading"><div><h2>Kanal penjualan</h2><p>Status koneksi toko</p></div><span className="setup-tag"><span/> Persiapan integrasi</span></div>
            <div className="channel-grid">
              <div className="channel-card">
                <div className="channel-head"><div className="channel-logo shopee">S</div><div><b>Shopee</b><small>Toko Shopee Anggi</small></div><span className="status pending">Belum terhubung</span></div>
                <div className="channel-foot"><span>Sinkronisasi produk & pesanan</span><button onClick={() => setNotice("Koneksi Shopee membutuhkan otorisasi resmi melalui Open Platform Shopee.")}>Hubungkan <Link2 size={14}/></button></div>
              </div>
              <div className="channel-card">
                <div className="channel-head"><div className="channel-logo tiktok">♪</div><div><b>TikTok Shop</b><small>Toko TikTok Anggi</small></div><span className="status pending">Belum terhubung</span></div>
                <div className="channel-foot"><span>Sinkronisasi produk & pesanan</span><button onClick={() => setNotice("Koneksi TikTok Shop membutuhkan otorisasi resmi melalui Seller Center / Partner Center.")}>Hubungkan <Link2 size={14}/></button></div>
              </div>
            </div>
          </section>

          <section className="stats">
            <div className="stat-card"><div className="stat-top"><span>Total pesanan hari ini</span><span className="stat-icon lavender"><ShoppingBag size={17}/></span></div><strong>—</strong><small>Menunggu koneksi toko</small></div>
            <div className="stat-card"><div className="stat-top"><span>Produk terdaftar</span><span className="stat-icon pink"><Package size={17}/></span></div><strong>3</strong><small>Contoh data awal</small></div>
            <div className="stat-card"><div className="stat-top"><span>Perlu diproses</span><span className="stat-icon amber"><Clock3 size={17}/></span></div><strong>—</strong><small>Menunggu koneksi toko</small></div>
            <div className="stat-card"><div className="stat-top"><span>Siap dikirim</span><span className="stat-icon mint"><Truck size={17}/></span></div><strong>—</strong><small>Menunggu koneksi toko</small></div>
          </section>

          <section className="lower-grid">
            <div className="panel products-panel">
              <div className="panel-heading"><div><h2>Produk terbaru</h2><p>Contoh tampilan katalog gabungan</p></div><button className="text-button" onClick={() => selectNav("Produk")}>Lihat semua <ArrowUpRight size={15}/></button></div>
              <div className="table-wrap"><table><thead><tr><th>PRODUK</th><th>SKU</th><th>STOK</th><th>HARGA</th><th>STATUS</th></tr></thead><tbody>{products.map(p => <tr key={p.sku}><td><div className="product-name"><div className="product-thumb"><Package size={17}/></div><b>{p.name}</b></div></td><td>{p.sku}</td><td>{p.stock}</td><td>{p.price}</td><td><span className={`product-status ${p.stock < 10 ? "low" : ""}`}>{p.stock < 10 ? "Stok menipis" : <><CheckCircle2 size={13}/> Aktif</>}</span></td></tr>)}</tbody></table></div>
            </div>
            <div className="panel quick-panel">
              <div className="panel-heading"><div><h2>Akses cepat</h2><p>Alat operasional toko</p></div></div>
              <button className="quick-action" onClick={() => selectNav("Scan Barcode")}><div className="quick-icon"><ScanLine size={19}/></div><div><b>Scan barcode</b><small>Pindai pesanan atau produk</small></div><ArrowUpRight size={16}/></button>
              <button className="quick-action" onClick={() => selectNav("Foto Paket")}><div className="quick-icon"><Camera size={19}/></div><div><b>Foto paket</b><small>Simpan bukti sebelum pengiriman</small></div><ArrowUpRight size={16}/></button>
              <button className="quick-action" onClick={() => selectNav("Karyawan")}><div className="quick-icon"><Users size={19}/></div><div><b>Kelola karyawan</b><small>Atur akses tim toko</small></div><ArrowUpRight size={16}/></button>
            </div>
          </section>
          <footer>© 2026 Cath Fairy Luxe Seller Center <span>•</span> Dashboard tahap awal</footer>
        </div>
      </section>
    </main>
  );
}

function MoreDots() {
  return <span className="more-dots">•••</span>;
}
