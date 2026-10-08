// Data dummy (tanpa database) untuk prototipe UI Pasar UMKM Bekasi.

export const kategori = [
  { id: "semua", nama: "Semua", ikon: "🛍️" },
  { id: "makanan", nama: "Makanan & Minuman", ikon: "🍱" },
  { id: "fashion", nama: "Fashion & Batik", ikon: "👕" },
  { id: "kerajinan", nama: "Kerajinan", ikon: "🧺" },
  { id: "pertanian", nama: "Hasil Tani", ikon: "🌾" },
  { id: "jasa", nama: "Jasa", ikon: "🛠️" },
];

export const produk = [
  { id: "p1", nama: "Dodol Betawi Original 500g", harga: 45000, kategori: "makanan", umkm: "Dodol Bu Sarni", desa: "Sukatani", kecamatan: "Sukatani", rating: 4.8, terjual: 1240, emoji: "🍬", level: 4, deskripsi: "Dodol Betawi khas Bekasi, dimasak 8 jam di kuali tembaga tanpa pengawet. Cocok untuk oleh-oleh dan hantaran." },
  { id: "p2", nama: "Batik Bekasi Motif Bambu Kuning", harga: 185000, kategori: "fashion", umkm: "Batik Tjiboenting", desa: "Cibuntu", kecamatan: "Cibitung", rating: 4.9, terjual: 312, emoji: "👘", level: 3, deskripsi: "Batik tulis motif khas Bekasi dengan pewarna alami. Bahan katun primisima, ukuran 2 x 1,15 m." },
  { id: "p3", nama: "Beras Pandan Wangi Pebayuran 5kg", harga: 78000, kategori: "pertanian", umkm: "Gapoktan Tani Mukti", desa: "Kertasari", kecamatan: "Pebayuran", rating: 4.7, terjual: 2210, emoji: "🌾", level: 4, deskripsi: "Beras pandan wangi langsung dari sawah Pebayuran, lumbung padi Kabupaten Bekasi. Pulen dan wangi." },
  { id: "p4", nama: "Keripik Singkong Pedas Daun Jeruk", harga: 18000, kategori: "makanan", umkm: "Snack Mak Ijah", desa: "Sukamekar", kecamatan: "Sukawangi", rating: 4.6, terjual: 3450, emoji: "🥔", level: 2, deskripsi: "Keripik singkong renyah dengan bumbu pedas daun jeruk. Kemasan zip-lock 200g, sudah PIRT dan halal." },
  { id: "p5", nama: "Tas Anyaman Eceng Gondok", harga: 125000, kategori: "kerajinan", umkm: "Kriya Muara", desa: "Muara Gembong", kecamatan: "Muara Gembong", rating: 4.8, terjual: 189, emoji: "👜", level: 3, deskripsi: "Tas anyaman dari eceng gondok sungai Citarum, dikerjakan ibu-ibu pesisir Muara Gembong." },
  { id: "p6", nama: "Bandeng Presto Duri Lunak", harga: 55000, kategori: "makanan", umkm: "Bandeng Pak Udin", desa: "Pantai Bahagia", kecamatan: "Muara Gembong", rating: 4.9, terjual: 980, emoji: "🐟", level: 4, deskripsi: "Bandeng tambak Muara Gembong dipresto 6 jam hingga duri lunak. Isi 4 ekor, vakum." },
  { id: "p7", nama: "Kaos Sablon Ikon Bekasi", harga: 89000, kategori: "fashion", umkm: "Konveksi Cikarang Jaya", desa: "Karangasih", kecamatan: "Cikarang Utara", rating: 4.5, terjual: 640, emoji: "👕", level: 4, deskripsi: "Kaos cotton combed 30s dengan sablon plastisol desain ikon-ikon Kabupaten Bekasi." },
  { id: "p8", nama: "Madu Klanceng Setu", harga: 95000, kategori: "pertanian", umkm: "Lebah Lestari", desa: "Burangkeng", kecamatan: "Setu", rating: 4.7, terjual: 270, emoji: "🍯", level: 2, deskripsi: "Madu lebah tanpa sengat (klanceng) murni, 250 ml. Rasa asam-manis segar." },
  { id: "p9", nama: "Jasa Servis AC & Elektronik", harga: 75000, kategori: "jasa", umkm: "Teknik Mandiri", desa: "Tambun", kecamatan: "Tambun Selatan", rating: 4.6, terjual: 520, emoji: "❄️", level: 3, deskripsi: "Cuci AC, isi freon, dan servis elektronik rumah tangga. Teknisi bersertifikat, area Tambun & Cibitung." },
  { id: "p10", nama: "Kerupuk Kulit Ikan Tenggiri", harga: 25000, kategori: "makanan", umkm: "Kerupuk Bahari", desa: "Pantai Mekar", kecamatan: "Muara Gembong", rating: 4.5, terjual: 1100, emoji: "🦈", level: 3, deskripsi: "Kerupuk kulit ikan tenggiri gurih, tinggi protein. Kemasan 150g." },
  { id: "p11", nama: "Miniatur Tugu Bekasi Kayu", harga: 65000, kategori: "kerajinan", umkm: "Galeri Kayu Serang Baru", desa: "Nagacipta", kecamatan: "Serang Baru", rating: 4.8, terjual: 88, emoji: "🗿", level: 2, deskripsi: "Miniatur ikon Bekasi dari kayu jati belanda, finishing natural. Tinggi 20 cm." },
  { id: "p12", nama: "Sayur Organik Paket Mingguan", harga: 60000, kategori: "pertanian", umkm: "Kebun Hijau Cibarusah", desa: "Sirnajati", kecamatan: "Cibarusah", rating: 4.7, terjual: 415, emoji: "🥬", level: 3, deskripsi: "Paket 6 jenis sayuran organik dipanen pagi hari, dikirim ke area Cikarang dan sekitarnya." },
];

export const tender = [
  { id: "t1", judul: "Katering Makan Siang Karyawan Shift 1", perusahaan: "PT Astra Daihatsu Motor", kawasan: "Kawasan Industri Jababeka", kategori: "Katering", nilai: 1200000000, satuan: "per tahun", volume: "1.500 porsi/hari", tenggat: "30 Okt 2031", status: "Dibuka", penawar: 12, emoji: "🍛", syarat: ["Level UMKM: Siap Industri (Level 4)", "Sertifikat Halal & PIRT/SLHS", "Kapasitas dapur min. 1.000 porsi/hari", "Lokasi maks. 15 km dari pabrik"] },
  { id: "t2", judul: "Pengadaan Seragam Kerja 2.000 Pcs", perusahaan: "PT Unilever Indonesia", kawasan: "Kawasan Industri EJIP", kategori: "Seragam", nilai: 340000000, satuan: "sekali kontrak", volume: "2.000 pcs", tenggat: "15 Nov 2031", status: "Dibuka", penawar: 7, emoji: "🦺", syarat: ["Level UMKM: Siap Industri (Level 4)", "NIB aktif", "Sampel produk wajib dikirim", "Kapasitas produksi 500 pcs/minggu"] },
  { id: "t3", judul: "Kemasan Karton Box Sparepart", perusahaan: "PT Suzuki Indomobil Motor", kawasan: "Kawasan Industri GIIC", kategori: "Kemasan", nilai: 560000000, satuan: "per tahun", volume: "20.000 box/bulan", tenggat: "5 Nov 2031", status: "Dibuka", penawar: 4, emoji: "📦", syarat: ["Level UMKM: Siap Industri (Level 4)", "NIB aktif & NPWP", "Standar uji tekan karton", "Pengiriman mingguan"] },
  { id: "t4", judul: "Jasa Kebersihan & Taman Area Kantor", perusahaan: "PT LG Electronics Indonesia", kawasan: "Kawasan Industri MM2100", kategori: "Jasa", nilai: 420000000, satuan: "per tahun", volume: "25 tenaga kerja", tenggat: "22 Okt 2031", status: "Evaluasi", penawar: 18, emoji: "🧹", syarat: ["Level UMKM: Siap Industri (Level 4)", "Merekrut warga sekitar kawasan", "BPJS Ketenagakerjaan", "Pengalaman min. 1 tahun"] },
  { id: "t5", judul: "Snack Box Rapat & Acara Perusahaan", perusahaan: "PT Mattel Indonesia", kawasan: "Kawasan Industri Jababeka", kategori: "Katering", nilai: 96000000, satuan: "per tahun", volume: "± 800 box/bulan", tenggat: "12 Nov 2031", status: "Dibuka", penawar: 21, emoji: "🥪", syarat: ["Level UMKM: Mandiri atau Siap Industri", "Sertifikat Halal", "Bisa pesan H-1"] },
  { id: "t6", judul: "Laundry Seragam & Wearpack Mingguan", perusahaan: "PT Toyota Motor Manufacturing", kawasan: "Kawasan Industri Delta Silicon", kategori: "Jasa", nilai: 180000000, satuan: "per tahun", volume: "3.000 pcs/minggu", tenggat: "8 Nov 2031", status: "Dibuka", penawar: 6, emoji: "🧺", syarat: ["Level UMKM: Siap Industri (Level 4)", "Mesin laundry industri", "Antar-jemput ke pabrik"] },
];

export const kawasan = [
  { nama: "Jababeka", perusahaan: 1650, mitra: 210 },
  { nama: "EJIP", perusahaan: 110, mitra: 34 },
  { nama: "MM2100", perusahaan: 220, mitra: 51 },
  { nama: "GIIC", perusahaan: 140, mitra: 28 },
  { nama: "Delta Silicon", perusahaan: 230, mitra: 40 },
  { nama: "Hyundai", perusahaan: 120, mitra: 22 },
  { nama: "BIIE Lippo", perusahaan: 83, mitra: 15 },
];

export const desa = [
  { id: "d1", nama: "Desa Sukatani", kecamatan: "Sukatani", produk: "Dodol Betawi", emoji: "🍬", umkm: 46, pekerja: 210, omzet: 380000000, rumahProduksi: true, hub: true, deskripsi: "Sentra dodol Betawi dengan Rumah Produksi Bersama berkapasitas 2 ton/bulan. Melayani pesanan hantaran dan oleh-oleh." },
  { id: "d2", nama: "Desa Pantai Bahagia", kecamatan: "Muara Gembong", produk: "Olahan Bandeng", emoji: "🐟", umkm: 38, pekerja: 175, omzet: 290000000, rumahProduksi: true, hub: true, deskripsi: "Desa pesisir penghasil bandeng tambak. Diolah menjadi bandeng presto, otak-otak dan kerupuk." },
  { id: "d3", nama: "Desa Kertasari", kecamatan: "Pebayuran", produk: "Beras Premium", emoji: "🌾", umkm: 52, pekerja: 320, omzet: 640000000, rumahProduksi: true, hub: false, deskripsi: "Lumbung padi Bekasi. Gapoktan mengolah gabah menjadi beras premium kemasan untuk B2C dan katering pabrik." },
  { id: "d4", nama: "Desa Cibuntu", kecamatan: "Cibitung", produk: "Batik Bekasi", emoji: "👘", umkm: 21, pekerja: 90, omzet: 150000000, rumahProduksi: true, hub: false, deskripsi: "Kampung batik dengan motif khas Bekasi. Menjadi pemasok seragam batik perusahaan di MM2100." },
  { id: "d5", nama: "Desa Muara Gembong", kecamatan: "Muara Gembong", produk: "Anyaman Eceng Gondok", emoji: "🧺", umkm: 18, pekerja: 70, omzet: 85000000, rumahProduksi: false, hub: true, deskripsi: "Ibu-ibu pesisir mengolah eceng gondok menjadi tas, keranjang dan dekorasi rumah bernilai jual." },
  { id: "d6", nama: "Desa Sirnajati", kecamatan: "Cibarusah", produk: "Sayur Organik", emoji: "🥬", umkm: 27, pekerja: 110, omzet: 120000000, rumahProduksi: false, hub: true, deskripsi: "Kebun sayur organik yang memasok dapur katering kawasan industri dan pelanggan B2C di Cikarang." },
];

export const levelUmkm = {
  1: { nama: "Pemula", warna: "bg-slate-100 text-slate-700" },
  2: { nama: "Berkembang", warna: "bg-sky-100 text-sky-700" },
  3: { nama: "Mandiri", warna: "bg-amber-100 text-amber-800" },
  4: { nama: "Siap Industri", warna: "bg-emerald-100 text-emerald-800" },
};

export const targetPerbup = [
  { tahun: 2031, porsi: 5 },
  { tahun: 2032, porsi: 10 },
  { tahun: 2034, porsi: 15 },
];

export const targetProgram2 = [
  { tahun: 2030, mitra: 100, b2b: 50, b2c: 10, desa: 5 },
  { tahun: 2031, mitra: 300, b2b: 150, b2c: 30, desa: 12 },
  { tahun: 2032, mitra: 600, b2b: 350, b2c: 60, desa: 22 },
  { tahun: 2033, mitra: 900, b2b: 600, b2c: 100, desa: 35 },
  { tahun: 2034, mitra: 1200, b2b: 1000, b2c: 150, desa: 50 },
];

export const pesananDummy = [
  { id: "INV-2031-0912", tanggal: "02 Okt 2031", item: "Dodol Betawi Original 500g x2", total: 90000, status: "Selesai" },
  { id: "INV-2031-0877", tanggal: "28 Sep 2031", item: "Beras Pandan Wangi Pebayuran 5kg x1", total: 78000, status: "Dikirim" },
];

export function rupiah(n) {
  return "Rp" + n.toLocaleString("id-ID");
}

export function rupiahSingkat(n) {
  if (n >= 1e12) return "Rp" + (n / 1e12).toLocaleString("id-ID", { maximumFractionDigits: 1 }) + " T";
  if (n >= 1e9) return "Rp" + (n / 1e9).toLocaleString("id-ID", { maximumFractionDigits: 1 }) + " M";
  if (n >= 1e6) return "Rp" + (n / 1e6).toLocaleString("id-ID", { maximumFractionDigits: 0 }) + " jt";
  return rupiah(n);
}
