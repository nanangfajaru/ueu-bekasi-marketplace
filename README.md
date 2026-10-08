# Pasar UMKM Bekasi

Prototipe UI **Program 2 — Pasar UMKM Bekasi** (Smart Economy Kabupaten Bekasi): marketplace B2B & B2C untuk UMKM.
Dibuat dengan Next.js (App Router) + Tailwind CSS. **Tanpa database** — semua data adalah data contoh di `lib/data.js`.

## Halaman
| Rute | Isi |
|---|---|
| `/` | Beranda: tiga pilar, produk terlaris, tender terbaru, desa digital |
| `/belanja`, `/belanja/[id]` | B2C: katalog (cari, filter, urut) & detail produk |
| `/keranjang`, `/checkout` | Keranjang (disimpan di browser) → alamat → bayar QRIS (simulasi) |
| `/b2b`, `/b2b/[id]`, `/b2b/pasang` | B2B Industri: daftar kebutuhan pabrik, ajukan penawaran, pasang kebutuhan |
| `/desa`, `/desa/[id]` | Desa UMKM Digital: 1 desa 1 produk unggulan |
| `/kemitraan` | Perbup Kemitraan Industri–UMKM (5% → 10% → 15%) |
| `/dashboard` | Dashboard Ekonomi Bupati (B2B/B2C, target 2030–2034) |
| `/masuk`, `/akun` | Login/daftar (simulasi) & akun pengguna |

## Menjalankan
```bash
npm install
npm run dev   # buka http://localhost:3000
```

## Deploy ke Vercel
Import repo ini di https://vercel.com/new — framework terdeteksi otomatis sebagai Next.js, tanpa konfigurasi tambahan.
