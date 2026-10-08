import { Suspense } from "react";
import KatalogProduk from "./KatalogProduk";

export const metadata = { title: "Belanja Produk UMKM · Pasar UMKM Bekasi" };

export default function Belanja() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-3xl font-extrabold">Belanja Produk UMKM Bekasi</h1>
      <p className="mt-1 text-slate-500">B2C · Untuk warga, karyawan pabrik, dan pembeli luar daerah. Bayar mudah dengan QRIS.</p>
      <Suspense>
        <KatalogProduk />
      </Suspense>
    </div>
  );
}
