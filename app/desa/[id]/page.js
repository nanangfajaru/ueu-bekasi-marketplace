import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { desa, produk, rupiahSingkat } from "@/lib/data";

export function generateStaticParams() {
  return desa.map((d) => ({ id: d.id }));
}

export default async function DetailDesa({ params }) {
  const { id } = await params;
  const d = desa.find((x) => x.id === id);
  if (!d) notFound();
  const produkDesa = produk.filter((p) => p.kecamatan === d.kecamatan);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <nav className="text-sm text-slate-500">
        <Link href="/desa" className="hover:text-emerald-700">Desa UMKM Digital</Link> / <span className="text-slate-800">{d.nama}</span>
      </nav>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="grid place-items-center rounded-3xl bg-gradient-to-br from-amber-100 to-orange-200 p-10 text-[7rem]">{d.emoji}</div>
        <div className="md:col-span-2">
          <h1 className="text-3xl font-extrabold">{d.nama}</h1>
          <p className="text-slate-500">Kecamatan {d.kecamatan}, Kabupaten Bekasi</p>
          <p className="mt-2 inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">Produk unggulan: {d.produk}</p>
          <p className="mt-4 text-slate-700">{d.deskripsi}</p>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200"><p className="text-2xl font-black text-emerald-700">{d.umkm}</p><p className="text-xs text-slate-500">UMKM aktif</p></div>
            <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200"><p className="text-2xl font-black text-emerald-700">{d.pekerja}</p><p className="text-xs text-slate-500">Tenaga kerja</p></div>
            <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200"><p className="text-2xl font-black text-emerald-700">{rupiahSingkat(d.omzet)}</p><p className="text-xs text-slate-500">Omzet / bulan</p></div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className={`rounded-2xl p-5 ${d.rumahProduksi ? "bg-emerald-50" : "bg-slate-100"}`}>
          <p className="font-bold">🏭 Rumah Produksi Bersama</p>
          <p className="mt-1 text-sm text-slate-600">{d.rumahProduksi ? "Sudah beroperasi — peralatan produksi standar industri dapat dipakai bersama oleh UMKM desa." : "Dalam tahap pembangunan (target tahun depan)."}</p>
        </div>
        <div className={`rounded-2xl p-5 ${d.hub ? "bg-sky-50" : "bg-slate-100"}`}>
          <p className="font-bold">🚚 Hub Logistik Desa</p>
          <p className="mt-1 text-sm text-slate-600">{d.hub ? "Aktif — titik kumpul & kirim pesanan B2C dan B2B dari desa ke pembeli." : "Dalam tahap perencanaan."}</p>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-extrabold">Produk dari Kec. {d.kecamatan}</h2>
        {produkDesa.length ? (
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {produkDesa.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        ) : (
          <p className="mt-4 text-sm text-slate-500">Produk segera hadir.</p>
        )}
      </section>
    </div>
  );
}
