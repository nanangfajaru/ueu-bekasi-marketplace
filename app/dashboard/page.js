import { targetProgram2, kawasan } from "@/lib/data";

export const metadata = { title: "Dashboard Ekonomi · Pasar UMKM Bekasi" };

const kpi = [
  { label: "Transaksi B2B (2031)", nilai: "Rp150 M", sub: "target tahunan", ikon: "🏭" },
  { label: "Transaksi B2C (2031)", nilai: "Rp30 M", sub: "target tahunan", ikon: "🛍️" },
  { label: "Perusahaan mitra", nilai: "300", sub: "12% dari ±2.553", ikon: "🤝" },
  { label: "Desa UMKM Digital", nilai: "12", sub: "dari 187 desa/kel.", ikon: "🏘️" },
];

const kecamatan = [
  { nama: "Cikarang Utara", b2b: 42, b2c: 9 },
  { nama: "Cibitung", b2b: 31, b2c: 7 },
  { nama: "Tambun Selatan", b2b: 18, b2c: 12 },
  { nama: "Setu", b2b: 15, b2c: 4 },
  { nama: "Pebayuran", b2b: 12, b2c: 6 },
  { nama: "Muara Gembong", b2b: 6, b2c: 5 },
];

export default function Dashboard() {
  const maxB2b = Math.max(...targetProgram2.map((t) => t.b2b));
  const maxKec = Math.max(...kecamatan.map((k) => k.b2b + k.b2c));

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h1 className="text-3xl font-extrabold">Dashboard Ekonomi Bupati</h1>
          <p className="text-slate-500">Ringkasan Pasar UMKM Bekasi · semua transaksi tercatat otomatis</p>
        </div>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">● Live (data contoh)</span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {kpi.map((k) => (
          <div key={k.label} className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-2xl">{k.ikon}</p>
            <p className="mt-2 text-sm text-slate-500">{k.label}</p>
            <p className="text-2xl font-black">{k.nilai}</p>
            <p className="text-xs text-slate-400">{k.sub}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="font-bold">Target Pendapatan B2B per Tahun (Rp miliar)</p>
          <div className="mt-6 flex h-56 items-end gap-4">
            {targetProgram2.map((t) => (
              <div key={t.tahun} className="flex flex-1 flex-col items-center gap-2">
                <span className="text-xs font-semibold">{t.b2b.toLocaleString("id-ID")}</span>
                <div className={`w-full rounded-t-lg ${t.tahun <= 2031 ? "bg-emerald-600" : "bg-emerald-200"}`} style={{ height: `${(t.b2b / maxB2b) * 180}px` }} />
                <span className="text-xs text-slate-500">{t.tahun}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">Hijau tua = berjalan · hijau muda = target</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="font-bold">Transaksi per Kecamatan (Rp miliar)</p>
          <div className="mt-4 space-y-3">
            {kecamatan.map((k) => (
              <div key={k.nama}>
                <div className="flex justify-between text-sm"><span>{k.nama}</span><span className="font-semibold">{k.b2b + k.b2c}</span></div>
                <div className="mt-1 flex h-3 overflow-hidden rounded-full bg-slate-100">
                  <div className="bg-emerald-600" style={{ width: `${(k.b2b / maxKec) * 100}%` }} />
                  <div className="bg-amber-400" style={{ width: `${(k.b2c / maxKec) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-4 text-xs">
            <span className="flex items-center gap-1"><span className="h-3 w-3 rounded bg-emerald-600" /> B2B</span>
            <span className="flex items-center gap-1"><span className="h-3 w-3 rounded bg-amber-400" /> B2C</span>
          </div>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <p className="p-5 pb-0 font-bold">Target 5 Tahun Program 2 (2030–2034)</p>
        <table className="mt-3 w-full min-w-[520px] text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr><th className="p-3">Tahun</th><th className="p-3">Perusahaan mitra</th><th className="p-3">B2B / tahun</th><th className="p-3">B2C / tahun</th><th className="p-3">Desa digital</th></tr>
          </thead>
          <tbody>
            {targetProgram2.map((t) => (
              <tr key={t.tahun} className="border-t border-slate-100">
                <td className="p-3 font-semibold">{t.tahun}</td>
                <td className="p-3">{t.mitra.toLocaleString("id-ID")}</td>
                <td className="p-3">{t.b2b >= 1000 ? "Rp1 T" : `Rp${t.b2b} M`}</td>
                <td className="p-3">Rp{t.b2c} M</td>
                <td className="p-3">{t.desa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
        <p className="font-bold">Mitra per Kawasan Industri</p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {kawasan.map((k) => (
            <div key={k.nama} className="rounded-xl bg-emerald-50 p-3 text-center">
              <p className="text-xl font-black text-emerald-700">{k.mitra}</p>
              <p className="text-xs text-slate-600">{k.nama}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
