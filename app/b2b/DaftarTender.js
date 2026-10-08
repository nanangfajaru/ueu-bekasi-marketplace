"use client";

import Link from "next/link";
import { useState } from "react";
import { tender, rupiahSingkat } from "@/lib/data";

const filter = ["Semua", "Katering", "Seragam", "Kemasan", "Jasa"];

export default function DaftarTender() {
  const [aktif, setAktif] = useState("Semua");
  const hasil = tender.filter((t) => aktif === "Semua" || t.kategori === aktif);

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-2xl font-extrabold">Kebutuhan Industri</h2>
        <div className="flex flex-wrap gap-2">
          {filter.map((f) => (
            <button
              key={f}
              onClick={() => setAktif(f)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${aktif === f ? "bg-emerald-600 text-white" : "border border-slate-200 bg-white"}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {hasil.map((t) => (
          <Link key={t.id} href={`/b2b/${t.id}`} className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-emerald-500 hover:shadow-md sm:flex-row sm:items-center">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-emerald-50 text-3xl">{t.emoji}</div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold">{t.kategori}</span>
                <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${t.status === "Dibuka" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-800"}`}>{t.status}</span>
              </div>
              <p className="mt-1 font-bold">{t.judul}</p>
              <p className="text-sm text-slate-500">{t.perusahaan} · {t.kawasan}</p>
            </div>
            <div className="sm:text-right">
              <p className="text-lg font-extrabold text-emerald-700">{rupiahSingkat(t.nilai)}</p>
              <p className="text-xs text-slate-500">{t.satuan} · {t.penawar} penawar</p>
              <p className="text-xs text-slate-500">Tenggat {t.tenggat}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
