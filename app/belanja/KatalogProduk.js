"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { kategori, produk } from "@/lib/data";

export default function KatalogProduk() {
  const params = useSearchParams();
  const [aktif, setAktif] = useState(params.get("kategori") || "semua");
  const [cari, setCari] = useState("");
  const [urut, setUrut] = useState("terlaris");

  let hasil = produk.filter(
    (p) =>
      (aktif === "semua" || p.kategori === aktif) &&
      (p.nama + p.umkm + p.kecamatan).toLowerCase().includes(cari.toLowerCase())
  );
  hasil = [...hasil].sort((a, b) =>
    urut === "termurah" ? a.harga - b.harga : urut === "termahal" ? b.harga - a.harga : urut === "rating" ? b.rating - a.rating : b.terjual - a.terjual
  );

  return (
    <>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input
          value={cari}
          onChange={(e) => setCari(e.target.value)}
          placeholder="🔍 Cari produk, UMKM, atau kecamatan..."
          className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-500"
        />
        <select value={urut} onChange={(e) => setUrut(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-4 py-3">
          <option value="terlaris">Terlaris</option>
          <option value="rating">Rating tertinggi</option>
          <option value="termurah">Harga termurah</option>
          <option value="termahal">Harga termahal</option>
        </select>
      </div>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
        {kategori.map((k) => (
          <button
            key={k.id}
            onClick={() => setAktif(k.id)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium ${
              aktif === k.id ? "bg-emerald-600 text-white" : "border border-slate-200 bg-white text-slate-700 hover:border-emerald-500"
            }`}
          >
            {k.ikon} {k.nama}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-slate-500">{hasil.length} produk ditemukan</p>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {hasil.map((p) => <ProductCard key={p.id} p={p} />)}
      </div>
      {hasil.length === 0 && <p className="py-16 text-center text-slate-500">Produk tidak ditemukan 😕</p>}
    </>
  );
}
