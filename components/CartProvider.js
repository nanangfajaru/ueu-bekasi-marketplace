"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  // Simpan keranjang di browser saja (tanpa database)
  useEffect(() => {
    try {
      const saved = localStorage.getItem("keranjang");
      if (saved) setItems(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("keranjang", JSON.stringify(items));
    } catch {}
  }, [items]);

  function tambah(produk, qty = 1) {
    setItems((prev) => {
      const ada = prev.find((i) => i.id === produk.id);
      if (ada) return prev.map((i) => (i.id === produk.id ? { ...i, qty: i.qty + qty } : i));
      return [...prev, { id: produk.id, nama: produk.nama, harga: produk.harga, emoji: produk.emoji, umkm: produk.umkm, qty }];
    });
  }

  function ubahQty(id, qty) {
    setItems((prev) => (qty <= 0 ? prev.filter((i) => i.id !== id) : prev.map((i) => (i.id === id ? { ...i, qty } : i))));
  }

  function kosongkan() {
    setItems([]);
  }

  const jumlah = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.qty * i.harga, 0);

  return (
    <CartContext.Provider value={{ items, tambah, ubahQty, kosongkan, jumlah, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
