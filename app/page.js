import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { produk, tender, desa, kategori, rupiahSingkat } from "@/lib/data";

const pilar = [
  { href: "/b2b", ikon: "🏭", judul: "B2B Industri", isi: "Perusahaan di 7 kawasan industri memasang kebutuhan non-inti. UMKM Level Siap Industri mengajukan penawaran.", warna: "from-emerald-600 to-emerald-800" },
  { href: "/desa", ikon: "🏘️", judul: "Desa UMKM Digital", isi: "Satu desa satu produk unggulan, dilengkapi Rumah Produksi Bersama dan hub logistik desa.", warna: "from-amber-500 to-orange-600" },
  { href: "/belanja", ikon: "🛍️", judul: "B2C Masyarakat", isi: "Warga, karyawan pabrik dan pembeli luar daerah belanja produk UMKM Bekasi online, bayar QRIS.", warna: "from-sky-600 to-indigo-700" },
];

const statistik = [
  { angka: "1.200", label: "Target perusahaan mitra B2B (2034)" },
  { angka: "Rp1 T", label: "Target transaksi B2B per tahun" },
  { angka: "50", label: "Desa UMKM Digital" },
  { angka: "60.000", label: "Lapangan kerja baru" },
];

export default function Beranda() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-950 text-white">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-amber-300">Program 2 · Smart Economy Kabupaten Bekasi</span>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Belanja Lokal,<br />
              <span className="text-amber-300">Bekasi Maju Bersama.</span>
            </h1>
            <p className="mt-4 max-w-md text-emerald-100">
              Pasar UMKM Bekasi menghubungkan UMKM dengan ribuan pabrik di kawasan industri dan masyarakat luas — dalam satu marketplace B2B & B2C.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/belanja" className="rounded-xl bg-amber-400 px-5 py-3 font-bold text-emerald-950 hover:bg-amber-300">Mulai Belanja</Link>
              <Link href="/b2b" className="rounded-xl border border-white/30 px-5 py-3 font-semibold hover:bg-white/10">Lihat Tender B2B</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {statistik.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
                <p className="text-3xl font-black text-amber-300">{s.angka}</p>
                <p className="mt-1 text-sm text-emerald-100">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiga pilar */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-extrabold">Tiga Pilar Pasar UMKM</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {pilar.map((p) => (
            <Link key={p.href} href={p.href} className={`rounded-2xl bg-gradient-to-br ${p.warna} p-6 text-white transition hover:-translate-y-1 hover:shadow-xl`}>
              <span className="text-4xl">{p.ikon}</span>
              <h3 className="mt-3 text-xl font-bold">{p.judul}</h3>
              <p className="mt-2 text-sm text-white/85">{p.isi}</p>
              <p className="mt-4 text-sm font-semibold">Buka →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Kategori */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap gap-2">
          {kategori.slice(1).map((k) => (
            <Link key={k.id} href={`/belanja?kategori=${k.id}`} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium hover:border-emerald-500 hover:text-emerald-700">
              {k.ikon} {k.nama}
            </Link>
          ))}
        </div>
      </section>

      {/* Produk unggulan */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-extrabold">Produk UMKM Terlaris</h2>
          <Link href="/belanja" className="text-sm font-semibold text-emerald-700">Lihat semua →</Link>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {produk.slice(0, 8).map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      {/* Tender terbaru */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-extrabold">Kebutuhan Industri Terbaru</h2>
              <p className="text-sm text-slate-500">Peluang pasokan untuk UMKM Level Siap Industri</p>
            </div>
            <Link href="/b2b" className="text-sm font-semibold text-emerald-700">Semua tender →</Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {tender.slice(0, 3).map((t) => (
              <Link key={t.id} href={`/b2b/${t.id}`} className="rounded-2xl border border-slate-200 p-5 hover:border-emerald-500 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{t.emoji}</span>
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">{t.kategori}</span>
                </div>
                <p className="mt-3 font-bold">{t.judul}</p>
                <p className="text-sm text-slate-500">{t.perusahaan}</p>
                <p className="mt-3 text-lg font-extrabold text-emerald-700">{rupiahSingkat(t.nilai)} <span className="text-xs font-normal text-slate-500">{t.satuan}</span></p>
                <p className="mt-1 text-xs text-slate-500">Tenggat: {t.tenggat}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Desa */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-extrabold">Desa UMKM Digital</h2>
          <Link href="/desa" className="text-sm font-semibold text-emerald-700">Semua desa →</Link>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
          {desa.slice(0, 3).map((d) => (
            <Link key={d.id} href={`/desa/${d.id}`} className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 p-5 hover:shadow-md">
              <span className="text-4xl">{d.emoji}</span>
              <p className="mt-2 font-bold">{d.nama}</p>
              <p className="text-sm text-slate-600">Kec. {d.kecamatan}</p>
              <p className="mt-2 text-sm font-semibold text-orange-700">Unggulan: {d.produk}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start gap-4 rounded-3xl bg-amber-400 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-black text-emerald-950">Punya usaha di Kabupaten Bekasi?</h3>
            <p className="text-emerald-900">Daftarkan UMKM Anda dan mulai jualan ke warga & pabrik di kawasan industri.</p>
          </div>
          <Link href="/masuk?mode=daftar" className="rounded-xl bg-emerald-800 px-6 py-3 font-bold text-white hover:bg-emerald-900">Daftar Jadi Penjual</Link>
        </div>
      </section>
    </>
  );
}
