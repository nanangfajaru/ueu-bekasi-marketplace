import Link from "next/link";
import DaftarTender from "./DaftarTender";
import { kawasan } from "@/lib/data";

export const metadata = { title: "B2B Industri · Pasar UMKM Bekasi" };

export default function B2B() {
  const totalMitra = kawasan.reduce((s, k) => s + k.mitra, 0);
  return (
    <>
      <section className="bg-gradient-to-br from-emerald-800 to-emerald-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <span className="text-sm font-semibold text-amber-300">🏭 B2B Industri</span>
          <h1 className="mt-2 text-3xl font-extrabold md:text-4xl">Pasokan Non-Inti untuk Pabrik, dari UMKM Lokal</h1>
          <p className="mt-2 max-w-2xl text-emerald-100">
            Perusahaan di 7 kawasan industri memasang kebutuhan katering, seragam, kemasan dan jasa. UMKM Level 4 &ldquo;Siap Industri&rdquo; mengajukan penawaran.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/b2b/pasang" className="rounded-xl bg-amber-400 px-5 py-3 font-bold text-emerald-950 hover:bg-amber-300">+ Pasang Kebutuhan (Perusahaan)</Link>
            <Link href="/kemitraan" className="rounded-xl border border-white/30 px-5 py-3 font-semibold hover:bg-white/10">Tentang Perbup Kemitraan</Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl bg-white/10 p-4"><p className="text-2xl font-black text-amber-300">7</p><p className="text-xs">Kawasan industri</p></div>
            <div className="rounded-xl bg-white/10 p-4"><p className="text-2xl font-black text-amber-300">±2.553</p><p className="text-xs">Perusahaan</p></div>
            <div className="rounded-xl bg-white/10 p-4"><p className="text-2xl font-black text-amber-300">{totalMitra}</p><p className="text-xs">Perusahaan sudah bermitra</p></div>
            <div className="rounded-xl bg-white/10 p-4"><p className="text-2xl font-black text-amber-300">5%</p><p className="text-xs">Porsi wajib belanja non-inti 2031</p></div>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-4 py-8">
        <DaftarTender />
      </div>
    </>
  );
}
