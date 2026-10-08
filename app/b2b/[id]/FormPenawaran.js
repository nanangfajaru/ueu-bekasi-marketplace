"use client";

import Link from "next/link";
import { useState } from "react";

export default function FormPenawaran({ t }) {
  const [terkirim, setTerkirim] = useState(false);

  if (terkirim) {
    return (
      <div className="h-fit rounded-2xl border-2 border-emerald-500 bg-emerald-50 p-6 text-center">
        <p className="text-5xl">📨</p>
        <p className="mt-3 text-lg font-bold">Penawaran Terkirim!</p>
        <p className="mt-1 text-sm text-slate-600">{t.perusahaan} akan meninjau penawaran Anda. Status dapat dipantau di halaman akun.</p>
        <Link href="/akun" className="mt-4 inline-block rounded-xl bg-emerald-600 px-5 py-2 font-semibold text-white">Pantau Status</Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setTerkirim(true);
      }}
      className="h-fit space-y-3 rounded-2xl border border-slate-200 bg-white p-6"
    >
      <h2 className="font-bold">Ajukan Penawaran</h2>
      <div className="rounded-xl bg-emerald-50 p-3 text-xs text-emerald-800">
        Masuk sebagai <b>Dodol Bu Sarni</b> · Level 4 Siap Industri ✅
      </div>
      <label className="block text-sm">Harga penawaran (Rp)
        <input required type="number" defaultValue={Math.round(t.nilai * 0.95)} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
      </label>
      <label className="block text-sm">Kapasitas produksi
        <input required placeholder="mis. 1.500 porsi/hari" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
      </label>
      <label className="block text-sm">Catatan
        <textarea rows={3} placeholder="Keunggulan produk, pengalaman, dll." className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
      </label>
      <label className="block text-sm">Dokumen pendukung
        <div className="mt-1 rounded-lg border border-dashed border-slate-300 p-3 text-center text-xs text-slate-500">📎 NIB, Sertifikat Halal, Profil Usaha (otomatis dari Super UMKM)</div>
      </label>
      <button className="w-full rounded-xl bg-emerald-600 py-3 font-bold text-white hover:bg-emerald-700">Kirim Penawaran</button>
    </form>
  );
}
