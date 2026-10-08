import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import TombolBeli from "./TombolBeli";
import { produk, levelUmkm, rupiah } from "@/lib/data";

export function generateStaticParams() {
  return produk.map((p) => ({ id: p.id }));
}

export default async function DetailProduk({ params }) {
  const { id } = await params;
  const p = produk.find((x) => x.id === id);
  if (!p) notFound();
  const lvl = levelUmkm[p.level];
  const serupa = produk.filter((x) => x.kategori === p.kategori && x.id !== p.id).slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <nav className="text-sm text-slate-500">
        <Link href="/" className="hover:text-emerald-700">Beranda</Link> /{" "}
        <Link href="/belanja" className="hover:text-emerald-700">Belanja</Link> / <span className="text-slate-800">{p.nama}</span>
      </nav>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div className="grid aspect-square place-items-center rounded-3xl bg-gradient-to-br from-emerald-50 to-amber-100 text-[9rem]">{p.emoji}</div>

        <div>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${lvl.warna}`}>UMKM Level {p.level} · {lvl.nama}</span>
          <h1 className="mt-3 text-3xl font-extrabold">{p.nama}</h1>
          <p className="mt-2 text-sm text-slate-500">⭐ {p.rating} · {p.terjual.toLocaleString("id-ID")} terjual</p>
          <p className="mt-4 text-3xl font-black text-emerald-700">{rupiah(p.harga)}</p>
          <p className="mt-4 text-slate-700">{p.deskripsi}</p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
            <p className="font-bold">{p.umkm}</p>
            <p className="text-sm text-slate-500">📍 Desa {p.desa}, Kec. {p.kecamatan}, Kab. Bekasi</p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-slate-100 px-2 py-1">✅ NIB Terverifikasi</span>
              <span className="rounded-full bg-slate-100 px-2 py-1">✅ Halal</span>
              <span className="rounded-full bg-slate-100 px-2 py-1">💳 Terima QRIS</span>
            </div>
          </div>

          <TombolBeli p={p} />
        </div>
      </div>

      {serupa.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xl font-extrabold">Produk Serupa</h2>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {serupa.map((x) => <ProductCard key={x.id} p={x} />)}
          </div>
        </section>
      )}
    </div>
  );
}
