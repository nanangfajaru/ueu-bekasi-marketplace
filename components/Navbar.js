"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "./CartProvider";

const menu = [
  { href: "/", label: "Beranda" },
  { href: "/belanja", label: "Belanja (B2C)" },
  { href: "/b2b", label: "B2B Industri" },
  { href: "/desa", label: "Desa UMKM Digital" },
  { href: "/kemitraan", label: "Perbup Kemitraan" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { jumlah } = useCart();
  const [buka, setBuka] = useState(false);

  const aktif = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-900/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-600 text-lg font-black text-white">P</span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold text-emerald-800">Pasar UMKM</span>
            <span className="block text-xs font-semibold text-amber-600">Kabupaten Bekasi</span>
          </span>
        </Link>

        <nav className="ml-4 hidden flex-1 items-center gap-1 lg:flex">
          {menu.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                aktif(m.href) ? "bg-emerald-50 text-emerald-700" : "text-slate-600 hover:bg-slate-50 hover:text-emerald-700"
              }`}
            >
              {m.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Link href="/keranjang" className="relative rounded-lg p-2 text-xl hover:bg-slate-50" aria-label="Keranjang">
            🛒
            {jumlah > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-amber-500 px-1 text-[10px] font-bold text-white">
                {jumlah}
              </span>
            )}
          </Link>
          <Link href="/masuk" className="hidden rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 sm:block">
            Masuk
          </Link>
          <button onClick={() => setBuka(!buka)} className="rounded-lg p-2 text-xl lg:hidden" aria-label="Menu">
            {buka ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {buka && (
        <nav className="border-t border-slate-100 px-4 pb-3 lg:hidden">
          {[...menu, { href: "/masuk", label: "Masuk / Daftar" }].map((m) => (
            <Link
              key={m.href}
              href={m.href}
              onClick={() => setBuka(false)}
              className={`block rounded-lg px-3 py-2 text-sm font-medium ${aktif(m.href) ? "bg-emerald-50 text-emerald-700" : "text-slate-600"}`}
            >
              {m.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
