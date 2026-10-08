import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md px-4 py-20 text-center">
      <p className="text-6xl">🧭</p>
      <h1 className="mt-4 text-2xl font-extrabold">Halaman tidak ditemukan</h1>
      <Link href="/" className="mt-6 inline-block rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white">Ke Beranda</Link>
    </div>
  );
}
