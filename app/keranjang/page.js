"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { rupiah } from "@/lib/data";

export default function Keranjang() {
  const { items, ubahQty, total } = useCart();
  const ongkir = items.length ? 10000 : 0;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-3xl font-extrabold">Keranjang Belanja</h1>

      {items.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-white py-16 text-center">
          <p className="text-6xl">🛒</p>
          <p className="mt-4 font-semibold">Keranjang masih kosong</p>
          <Link href="/belanja" className="mt-4 inline-block rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white">Mulai Belanja</Link>
        </div>
      ) : (
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="space-y-3 md:col-span-2">
            {items.map((i) => (
              <div key={i.id} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-emerald-50 text-3xl">{i.emoji}</div>
                <div className="min-w-0 flex-1">
                  <Link href={`/belanja/${i.id}`} className="font-semibold hover:text-emerald-700">{i.nama}</Link>
                  <p className="text-xs text-slate-500">{i.umkm}</p>
                  <p className="font-bold text-emerald-700">{rupiah(i.harga)}</p>
                </div>
                <div className="flex items-center rounded-xl border border-slate-200">
                  <button onClick={() => ubahQty(i.id, i.qty - 1)} className="px-3 py-1">−</button>
                  <span className="w-6 text-center text-sm">{i.qty}</span>
                  <button onClick={() => ubahQty(i.id, i.qty + 1)} className="px-3 py-1">+</button>
                </div>
              </div>
            ))}
          </div>

          <div className="h-fit rounded-2xl border border-slate-200 bg-white p-5">
            <p className="font-bold">Ringkasan</p>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between"><span>Subtotal</span><span>{rupiah(total)}</span></div>
              <div className="flex justify-between"><span>Ongkir (hub logistik desa)</span><span>{rupiah(ongkir)}</span></div>
              <div className="flex justify-between border-t pt-2 text-base font-bold"><span>Total</span><span className="text-emerald-700">{rupiah(total + ongkir)}</span></div>
            </div>
            <Link href="/checkout" className="mt-4 block rounded-xl bg-emerald-600 py-3 text-center font-bold text-white hover:bg-emerald-700">
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
