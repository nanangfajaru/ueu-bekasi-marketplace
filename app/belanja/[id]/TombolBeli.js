"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";

export default function TombolBeli({ p }) {
  const { tambah } = useCart();
  const router = useRouter();
  const [qty, setQty] = useState(1);
  const [notif, setNotif] = useState(false);

  function masukKeranjang() {
    tambah(p, qty);
    setNotif(true);
    setTimeout(() => setNotif(false), 2000);
  }

  return (
    <div className="mt-6">
      <div className="flex items-center gap-3">
        <span className="text-sm text-slate-600">Jumlah</span>
        <div className="flex items-center rounded-xl border border-slate-200 bg-white">
          <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-2 text-lg">−</button>
          <span className="w-8 text-center font-semibold">{qty}</span>
          <button onClick={() => setQty(qty + 1)} className="px-4 py-2 text-lg">+</button>
        </div>
      </div>
      <div className="mt-4 flex gap-3">
        <button onClick={masukKeranjang} className="flex-1 rounded-xl border-2 border-emerald-600 px-5 py-3 font-bold text-emerald-700 hover:bg-emerald-50">
          + Keranjang
        </button>
        <button
          onClick={() => {
            tambah(p, qty);
            router.push("/keranjang");
          }}
          className="flex-1 rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white hover:bg-emerald-700"
        >
          Beli Sekarang
        </button>
      </div>
      {notif && <p className="mt-3 rounded-lg bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">✅ Ditambahkan ke keranjang</p>}
    </div>
  );
}
