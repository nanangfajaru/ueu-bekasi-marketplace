"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import { rupiah } from "@/lib/data";

// Pola QR dummy agar terlihat seperti kode QRIS
function QrDummy() {
  const cells = Array.from({ length: 21 * 21 }, (_, i) => {
    const x = i % 21, y = Math.floor(i / 21);
    const sudut = (a, b) => x >= a && x < a + 7 && y >= b && y < b + 7;
    if (sudut(0, 0) || sudut(14, 0) || sudut(0, 14)) {
      const lx = x % 14 === x ? x : x - 14, ly = y % 14 === y ? y : y - 14;
      return lx === 0 || lx === 6 || ly === 0 || ly === 6 || (lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4);
    }
    return (x * 7 + y * 13 + x * y) % 3 === 0;
  });
  return (
    <div className="grid h-52 w-52 grid-cols-[repeat(21,1fr)] bg-white p-2">
      {cells.map((on, i) => <div key={i} className={on ? "bg-slate-900" : ""} />)}
    </div>
  );
}

export default function Checkout() {
  const { items, total, kosongkan } = useCart();
  const [tahap, setTahap] = useState("alamat");
  const [noPesanan, setNoPesanan] = useState("");
  const ongkir = 10000;

  if (tahap === "sukses") {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <p className="text-7xl">🎉</p>
        <h1 className="mt-4 text-3xl font-extrabold">Pembayaran Berhasil!</h1>
        <p className="mt-2 text-slate-600">Terima kasih telah mendukung UMKM Kabupaten Bekasi. Pesanan Anda sedang disiapkan oleh penjual dan akan dikirim melalui hub logistik desa.</p>
        <p className="mt-4 rounded-xl bg-white p-3 font-mono text-sm">No. Pesanan: {noPesanan}</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/akun" className="rounded-xl border border-emerald-600 px-5 py-3 font-semibold text-emerald-700">Lihat Pesanan</Link>
          <Link href="/belanja" className="rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white">Belanja Lagi</Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <p className="font-semibold">Tidak ada barang untuk di-checkout.</p>
        <Link href="/belanja" className="mt-4 inline-block rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white">Belanja</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-extrabold">Checkout</h1>
      <div className="mt-4 flex gap-2 text-sm">
        {["alamat", "bayar"].map((t, i) => (
          <span key={t} className={`rounded-full px-3 py-1 font-semibold ${tahap === t ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-500"}`}>
            {i + 1}. {t === "alamat" ? "Alamat Pengiriman" : "Bayar QRIS"}
          </span>
        ))}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          {tahap === "alamat" ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setTahap("bayar");
              }}
              className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm">Nama Penerima<input required defaultValue="Budi Santoso" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" /></label>
                <label className="text-sm">No. HP<input required defaultValue="0812-3456-7890" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" /></label>
              </div>
              <label className="block text-sm">Kecamatan
                <select className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2">
                  {["Cikarang Utara", "Cikarang Selatan", "Tambun Selatan", "Cibitung", "Setu", "Pebayuran", "Muara Gembong"].map((k) => <option key={k}>{k}</option>)}
                </select>
              </label>
              <label className="block text-sm">Alamat Lengkap<textarea required defaultValue="Jl. Raya Industri No. 12, RT 03/RW 05" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" rows={3} /></label>
              <button className="w-full rounded-xl bg-emerald-600 py-3 font-bold text-white hover:bg-emerald-700">Lanjut ke Pembayaran</button>
            </form>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
              <p className="inline-block rounded-md bg-slate-900 px-3 py-1 text-sm font-black tracking-widest text-white">QRIS</p>
              <p className="mt-2 text-sm text-slate-500">Pindai dengan aplikasi bank / e-wallet apa pun</p>
              <div className="mt-4 flex justify-center rounded-2xl border-4 border-slate-900 p-1 mx-auto w-fit"><QrDummy /></div>
              <p className="mt-4 text-2xl font-black text-emerald-700">{rupiah(total + ongkir)}</p>
              <p className="text-xs text-slate-500">PASAR UMKM BEKASI · NMID ID2031BKS0001</p>
              <button
                onClick={() => {
                  setNoPesanan("INV-2031-" + Math.floor(1000 + Math.random() * 8999));
                  kosongkan();
                  setTahap("sukses");
                }}
                className="mt-6 w-full rounded-xl bg-emerald-600 py-3 font-bold text-white hover:bg-emerald-700"
              >
                Saya Sudah Bayar (Simulasi)
              </button>
              <button onClick={() => setTahap("alamat")} className="mt-2 text-sm text-slate-500 underline">Kembali</button>
            </div>
          )}
        </div>

        <div className="h-fit rounded-2xl border border-slate-200 bg-white p-5">
          <p className="font-bold">Pesanan ({items.length} produk)</p>
          <ul className="mt-3 space-y-2 text-sm">
            {items.map((i) => (
              <li key={i.id} className="flex justify-between gap-2"><span className="truncate">{i.emoji} {i.nama} ×{i.qty}</span><span className="shrink-0">{rupiah(i.harga * i.qty)}</span></li>
            ))}
          </ul>
          <div className="mt-3 space-y-1 border-t pt-3 text-sm">
            <div className="flex justify-between"><span>Ongkir</span><span>{rupiah(ongkir)}</span></div>
            <div className="flex justify-between font-bold"><span>Total</span><span className="text-emerald-700">{rupiah(total + ongkir)}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
