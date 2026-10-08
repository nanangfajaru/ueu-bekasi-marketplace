import Link from "next/link";
import { levelUmkm, rupiah } from "@/lib/data";

export default function ProductCard({ p }) {
  const lvl = levelUmkm[p.level];
  return (
    <Link href={`/belanja/${p.id}`} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="grid aspect-square place-items-center bg-gradient-to-br from-emerald-50 to-amber-50 text-6xl transition group-hover:scale-105">
        {p.emoji}
      </div>
      <div className="p-3">
        <p className="line-clamp-2 min-h-10 text-sm font-medium text-slate-800">{p.nama}</p>
        <p className="mt-1 font-bold text-emerald-700">{rupiah(p.harga)}</p>
        <p className="mt-1 truncate text-xs text-slate-500">📍 {p.kecamatan} · {p.umkm}</p>
        <div className="mt-2 flex items-center justify-between text-xs">
          <span className="text-slate-500">⭐ {p.rating} · {p.terjual.toLocaleString("id-ID")} terjual</span>
        </div>
        <span className={`mt-2 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${lvl.warna}`}>
          Level {p.level} · {lvl.nama}
        </span>
      </div>
    </Link>
  );
}
