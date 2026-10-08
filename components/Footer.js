import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 bg-emerald-950 text-emerald-100">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <p className="text-lg font-extrabold text-white">Pasar UMKM Bekasi</p>
          <p className="mt-2 text-sm text-emerald-200/80">
            Marketplace B2B & B2C produk UMKM Kabupaten Bekasi. Bagian dari program Smart Economy — Program 2.
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Jelajahi</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/belanja" className="hover:text-white">Belanja Produk UMKM</Link></li>
            <li><Link href="/b2b" className="hover:text-white">Tender B2B Industri</Link></li>
            <li><Link href="/desa" className="hover:text-white">Desa UMKM Digital</Link></li>
            <li><Link href="/kemitraan" className="hover:text-white">Perbup Kemitraan</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Pembayaran</p>
          <p className="mt-2 inline-block rounded-md bg-white px-3 py-1 text-sm font-black tracking-wider text-slate-900">QRIS</p>
          <p className="mt-3 text-xs text-emerald-200/70">Prototipe UI untuk tugas kuliah Smart City — Domain Smart Economy. Data yang ditampilkan adalah data contoh.</p>
        </div>
      </div>
      <div className="border-t border-emerald-900 py-4 text-center text-xs text-emerald-300/70">
        © 2031 Pemerintah Kabupaten Bekasi · Smart Economy UMKM
      </div>
    </footer>
  );
}
