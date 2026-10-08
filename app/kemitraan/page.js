import Link from "next/link";
import { kawasan, targetPerbup } from "@/lib/data";

export const metadata = { title: "Perbup Kemitraan Industri–UMKM · Pasar UMKM Bekasi" };

export default function Kemitraan() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <span className="text-sm font-semibold text-emerald-700">📜 Regulasi</span>
      <h1 className="mt-1 text-3xl font-extrabold">Peraturan Bupati Kemitraan Industri–UMKM</h1>
      <p className="mt-2 text-slate-600">
        Perusahaan di kawasan industri wajib menyalurkan sebagian belanja non-inti (katering, seragam, kemasan, jasa) kepada UMKM lokal Kabupaten Bekasi melalui Pasar UMKM Bekasi.
      </p>

      <h2 className="mt-8 text-xl font-bold">Porsi Wajib Belanja Non-Inti</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {targetPerbup.map((t) => (
          <div key={t.tahun} className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
            <p className="text-sm text-slate-500">Tahun {t.tahun}</p>
            <p className="text-5xl font-black text-emerald-700">{t.porsi}%</p>
            <div className="mt-4 h-2 rounded-full bg-slate-100"><div className="h-2 rounded-full bg-emerald-500" style={{ width: `${(t.porsi / 15) * 100}%` }} /></div>
          </div>
        ))}
      </div>

      <h2 className="mt-10 text-xl font-bold">Insentif bagi Perusahaan</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-amber-50 p-5"><p className="text-3xl">🏆</p><p className="mt-2 font-bold">Penghargaan Bupati</p><p className="text-sm text-slate-600">Perusahaan mitra terbaik setiap tahun mendapatkan penghargaan langsung dari Bupati.</p></div>
        <div className="rounded-2xl bg-emerald-50 p-5"><p className="text-3xl">🤝</p><p className="mt-2 font-bold">Diakui sebagai CSR</p><p className="text-sm text-slate-600">Realisasi belanja ke UMKM tercatat otomatis dan diakui sebagai program CSR perusahaan.</p></div>
      </div>

      <h2 className="mt-10 text-xl font-bold">Kepatuhan per Kawasan Industri</h2>
      <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr><th className="p-3">Kawasan</th><th className="p-3">Perusahaan</th><th className="p-3">Sudah bermitra</th><th className="p-3 w-1/3">Progres</th></tr>
          </thead>
          <tbody>
            {kawasan.map((k) => {
              const persen = Math.round((k.mitra / k.perusahaan) * 100);
              return (
                <tr key={k.nama} className="border-t border-slate-100">
                  <td className="p-3 font-semibold">{k.nama}</td>
                  <td className="p-3">{k.perusahaan.toLocaleString("id-ID")}</td>
                  <td className="p-3">{k.mitra}</td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <div className="h-2 flex-1 rounded-full bg-slate-100"><div className="h-2 rounded-full bg-emerald-500" style={{ width: `${persen}%` }} /></div>
                      <span className="w-9 text-xs">{persen}%</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/b2b/pasang" className="rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white">Daftarkan Perusahaan Sebagai Mitra</Link>
        <Link href="/b2b" className="rounded-xl border border-emerald-600 px-5 py-3 font-semibold text-emerald-700">Lihat Tender B2B</Link>
      </div>
    </div>
  );
}
