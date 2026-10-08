import Link from "next/link";
import { notFound } from "next/navigation";
import FormPenawaran from "./FormPenawaran";
import { tender, rupiah } from "@/lib/data";

export function generateStaticParams() {
  return tender.map((t) => ({ id: t.id }));
}

export default async function DetailTender({ params }) {
  const { id } = await params;
  const t = tender.find((x) => x.id === id);
  if (!t) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <nav className="text-sm text-slate-500">
        <Link href="/b2b" className="hover:text-emerald-700">B2B Industri</Link> / <span className="text-slate-800">{t.judul}</span>
      </nav>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="space-y-6 md:col-span-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <span className="text-5xl">{t.emoji}</span>
              <div>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">{t.status}</span>
                <h1 className="mt-2 text-2xl font-extrabold">{t.judul}</h1>
                <p className="text-slate-500">{t.perusahaan}</p>
              </div>
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
              <div><dt className="text-slate-500">Nilai kontrak</dt><dd className="font-bold text-emerald-700">{rupiah(t.nilai)}</dd></div>
              <div><dt className="text-slate-500">Periode</dt><dd className="font-semibold">{t.satuan}</dd></div>
              <div><dt className="text-slate-500">Volume</dt><dd className="font-semibold">{t.volume}</dd></div>
              <div><dt className="text-slate-500">Tenggat</dt><dd className="font-semibold">{t.tenggat}</dd></div>
            </dl>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="font-bold">Persyaratan Pemasok</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {t.syarat.map((s) => <li key={s} className="flex gap-2"><span>✔️</span>{s}</li>)}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="font-bold">Lokasi</h2>
            <p className="mt-1 text-sm text-slate-600">{t.kawasan}, Kabupaten Bekasi</p>
            <div className="mt-3 grid h-40 place-items-center rounded-xl bg-[repeating-linear-gradient(45deg,#ecfdf5,#ecfdf5_10px,#d1fae5_10px,#d1fae5_20px)] text-sm font-semibold text-emerald-800">
              🗺️ Peta kawasan (ilustrasi)
            </div>
          </div>
        </div>

        <FormPenawaran t={t} />
      </div>
    </div>
  );
}
