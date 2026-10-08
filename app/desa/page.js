import Link from "next/link";
import { desa, rupiahSingkat } from "@/lib/data";

export const metadata = { title: "Desa UMKM Digital · Pasar UMKM Bekasi" };

export default function Desa() {
  return (
    <>
      <section className="bg-gradient-to-br from-amber-500 to-orange-600 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <span className="text-sm font-semibold text-amber-100">🏘️ Desa UMKM Digital</span>
          <h1 className="mt-2 text-3xl font-extrabold md:text-4xl">Satu Desa, Satu Produk Unggulan</h1>
          <p className="mt-2 max-w-2xl text-amber-50">
            Desa dilengkapi Rumah Produksi Bersama dan hub logistik desa agar produk UMKM siap dijual ke warga maupun pabrik.
          </p>
          <div className="mt-6 grid max-w-xl grid-cols-3 gap-3">
            <div className="rounded-xl bg-white/15 p-4"><p className="text-2xl font-black">187</p><p className="text-xs">Desa/kelurahan</p></div>
            <div className="rounded-xl bg-white/15 p-4"><p className="text-2xl font-black">12</p><p className="text-xs">Desa digital (2031)</p></div>
            <div className="rounded-xl bg-white/15 p-4"><p className="text-2xl font-black">50</p><p className="text-xs">Target 2034</p></div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {desa.map((d) => (
            <Link key={d.id} href={`/desa/${d.id}`} className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-lg">
              <div className="grid h-32 place-items-center bg-gradient-to-br from-amber-50 to-orange-100 text-6xl">{d.emoji}</div>
              <div className="p-5">
                <p className="text-lg font-bold">{d.nama}</p>
                <p className="text-sm text-slate-500">Kec. {d.kecamatan}</p>
                <p className="mt-2 text-sm font-semibold text-orange-700">Unggulan: {d.produk}</p>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="rounded-lg bg-slate-50 p-2"><p className="font-bold">{d.umkm}</p><p className="text-slate-500">UMKM</p></div>
                  <div className="rounded-lg bg-slate-50 p-2"><p className="font-bold">{d.pekerja}</p><p className="text-slate-500">Pekerja</p></div>
                  <div className="rounded-lg bg-slate-50 p-2"><p className="font-bold">{rupiahSingkat(d.omzet)}</p><p className="text-slate-500">Omzet/bln</p></div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {d.rumahProduksi && <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-emerald-700">🏭 Rumah Produksi</span>}
                  {d.hub && <span className="rounded-full bg-sky-100 px-2 py-0.5 text-sky-700">🚚 Hub Logistik</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
