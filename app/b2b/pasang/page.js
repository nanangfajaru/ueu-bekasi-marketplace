"use client";

import Link from "next/link";
import { useState } from "react";

export default function PasangKebutuhan() {
  const [terkirim, setTerkirim] = useState(false);

  if (terkirim) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <p className="text-6xl">✅</p>
        <h1 className="mt-4 text-2xl font-extrabold">Kebutuhan Berhasil Dipasang</h1>
        <p className="mt-2 text-slate-600">Kebutuhan Anda akan tampil untuk UMKM Level Siap Industri. Belanja ini tercatat sebagai realisasi Perbup Kemitraan & CSR perusahaan.</p>
        <Link href="/b2b" className="mt-6 inline-block rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white">Kembali ke B2B</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <Link href="/b2b" className="text-sm text-slate-500 hover:text-emerald-700">← B2B Industri</Link>
      <h1 className="mt-2 text-3xl font-extrabold">Pasang Kebutuhan Non-Inti</h1>
      <p className="text-slate-500">Untuk perusahaan di kawasan industri Kabupaten Bekasi.</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTerkirim(true);
        }}
        className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-6"
      >
        <label className="block text-sm">Nama perusahaan<input required defaultValue="PT Contoh Manufaktur Indonesia" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" /></label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm">Kawasan industri
            <select className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2">
              {["Jababeka", "EJIP", "MM2100", "GIIC", "Delta Silicon", "Hyundai", "BIIE Lippo"].map((k) => <option key={k}>{k}</option>)}
            </select>
          </label>
          <label className="block text-sm">Kategori
            <select className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2">
              {["Katering", "Seragam", "Kemasan", "Jasa Kebersihan", "Laundry", "Lainnya"].map((k) => <option key={k}>{k}</option>)}
            </select>
          </label>
        </div>
        <label className="block text-sm">Judul kebutuhan<input required placeholder="mis. Katering makan siang 500 porsi/hari" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" /></label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm">Perkiraan nilai (Rp)<input required type="number" placeholder="500000000" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" /></label>
          <label className="block text-sm">Tenggat penawaran<input required type="date" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" /></label>
        </div>
        <label className="block text-sm">Deskripsi & persyaratan<textarea rows={4} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" /></label>
        <button className="w-full rounded-xl bg-emerald-600 py-3 font-bold text-white hover:bg-emerald-700">Pasang Kebutuhan</button>
      </form>
    </div>
  );
}
