"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const peran = [
  { id: "pembeli", label: "Pembeli", ikon: "🛍️" },
  { id: "umkm", label: "UMKM", ikon: "🏪" },
  { id: "perusahaan", label: "Perusahaan", ikon: "🏭" },
];

export default function Masuk() {
  const router = useRouter();
  const [mode, setMode] = useState("masuk");
  const [role, setRole] = useState("pembeli");

  function submit(e) {
    e.preventDefault();
    router.push(role === "perusahaan" ? "/b2b" : "/akun");
  }

  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <div className="rounded-3xl border border-slate-200 bg-white p-8">
        <div className="flex rounded-xl bg-slate-100 p-1">
          {["masuk", "daftar"].map((m) => (
            <button key={m} onClick={() => setMode(m)} className={`flex-1 rounded-lg py-2 text-sm font-semibold capitalize ${mode === m ? "bg-white shadow" : "text-slate-500"}`}>
              {m}
            </button>
          ))}
        </div>

        <h1 className="mt-6 text-2xl font-extrabold">{mode === "masuk" ? "Selamat datang kembali" : "Buat akun baru"}</h1>
        <p className="text-sm text-slate-500">Satu akun terhubung dengan Super UMKM Bekasi.</p>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {peran.map((p) => (
            <button key={p.id} type="button" onClick={() => setRole(p.id)} className={`rounded-xl border-2 p-3 text-center text-sm ${role === p.id ? "border-emerald-600 bg-emerald-50" : "border-slate-200"}`}>
              <span className="block text-2xl">{p.ikon}</span>{p.label}
            </button>
          ))}
        </div>

        <form onSubmit={submit} className="mt-4 space-y-3">
          {mode === "daftar" && (
            <label className="block text-sm">{role === "umkm" ? "Nama usaha" : role === "perusahaan" ? "Nama perusahaan" : "Nama lengkap"}
              <input required className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
            </label>
          )}
          {mode === "daftar" && role === "umkm" && (
            <label className="block text-sm">NIB (opsional)<input className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" placeholder="Belum punya? Ajukan di Super UMKM" /></label>
          )}
          <label className="block text-sm">Email / No. HP<input required defaultValue="budi@email.com" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" /></label>
          <label className="block text-sm">Kata sandi<input required type="password" defaultValue="rahasia" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" /></label>
          <button className="w-full rounded-xl bg-emerald-600 py-3 font-bold text-white hover:bg-emerald-700">{mode === "masuk" ? "Masuk" : "Daftar"}</button>
        </form>
        <p className="mt-4 text-center text-xs text-slate-400">Prototipe: tombol langsung mengarahkan tanpa verifikasi.</p>
        <Link href="/" className="mt-2 block text-center text-sm text-emerald-700">← Kembali ke beranda</Link>
      </div>
    </div>
  );
}
