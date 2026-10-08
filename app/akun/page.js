import Link from "next/link";
import { pesananDummy, tender, rupiah } from "@/lib/data";

export const metadata = { title: "Akun Saya · Pasar UMKM Bekasi" };

export default function Akun() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-emerald-700 to-emerald-900 p-6 text-white">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-amber-400 text-2xl font-black text-emerald-950">BS</div>
        <div>
          <p className="text-xl font-bold">Budi Santoso</p>
          <p className="text-sm text-emerald-100">budi@email.com · Cikarang Utara</p>
        </div>
        <Link href="/masuk" className="ml-auto rounded-lg border border-white/30 px-3 py-1.5 text-sm">Keluar</Link>
      </div>

      <h2 className="mt-8 text-xl font-bold">Pesanan Saya (B2C)</h2>
      <div className="mt-3 space-y-3">
        {pesananDummy.map((p) => (
          <div key={p.id} className="flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex-1">
              <p className="font-mono text-xs text-slate-500">{p.id} · {p.tanggal}</p>
              <p className="font-semibold">{p.item}</p>
            </div>
            <p className="font-bold text-emerald-700">{rupiah(p.total)}</p>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${p.status === "Selesai" ? "bg-emerald-100 text-emerald-700" : "bg-sky-100 text-sky-700"}`}>{p.status}</span>
          </div>
        ))}
      </div>

      <h2 className="mt-8 text-xl font-bold">Penawaran B2B Saya (sebagai UMKM)</h2>
      <div className="mt-3 space-y-3">
        {tender.slice(0, 2).map((t, i) => (
          <Link key={t.id} href={`/b2b/${t.id}`} className="flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 hover:border-emerald-500">
            <span className="text-2xl">{t.emoji}</span>
            <div className="flex-1">
              <p className="font-semibold">{t.judul}</p>
              <p className="text-xs text-slate-500">{t.perusahaan}</p>
            </div>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${i === 0 ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-700"}`}>
              {i === 0 ? "Sedang ditinjau" : "Lolos seleksi"}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
