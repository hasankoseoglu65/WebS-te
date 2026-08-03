// ==== ÜRÜNLER ====
// Admin panelinden ekle/sil yapılınca tarayıcı hafızasına (localStorage) kaydedilir.
// İlk açılışta bu varsayılan liste yüklenir.

const VARSAYILAN_URUNLER = [
  { id:1, ad:"Labubu Figür Koleksiyon Oyuncağı", fiyat:399.90, emoji:"🐰", puan:4.9, yorum:345, kategori:"Figürler" },
  { id:2, ad:"Pop It Elektronik Hızlı Bas Oyunu", fiyat:254.90, emoji:"🎮", puan:4.8, yorum:201, kategori:"Pop It" },
  { id:3, ad:"Elektronik Boks Antrenman Makinesi", fiyat:899.90, emoji:"🥊", puan:4.9, yorum:87, kategori:"Oyunlar" },
  { id:4, ad:"4x4 Uzaktan Kumandalı Off-Road Araba", fiyat:789.90, emoji:"🚙", puan:4.9, yorum:156, kategori:"Kumandalı" },
  { id:5, ad:"TikTok Toys Sürpriz Kutu", fiyat:249.90, emoji:"🎁", puan:4.8, yorum:312, kategori:"Sürpriz" },
  { id:6, ad:"Akıl & Zeka Küpü Seti", fiyat:149.90, emoji:"🧩", puan:4.7, yorum:98, kategori:"Zeka" },
];

const VARSAYILAN_KATEGORILER = [
  { ad:"Figürler", emoji:"🦸", renk:"#a855f7" },
  { ad:"Pop It Oyuncaklar", emoji:"🌈", renk:"#f97316" },
  { ad:"Akıl & Zeka", emoji:"🧩", renk:"#14b8a6" },
  { ad:"Uzaktan Kumandalı", emoji:"🚗", renk:"#3b82f6" },
  { ad:"Kız Oyuncakları", emoji:"🏠", renk:"#ec4899" },
  { ad:"STEM Oyuncaklar", emoji:"🧱", renk:"#eab308" },
];

function urunleriGetir() {
  const kayit = localStorage.getItem('toysshop_urunler');
  return kayit ? JSON.parse(kayit) : VARSAYILAN_URUNLER;
}
function urunleriKaydet(liste) {
  localStorage.setItem('toysshop_urunler', JSON.stringify(liste));
}
function kategorileriGetir() {
  const kayit = localStorage.getItem('toysshop_kategoriler');
  return kayit ? JSON.parse(kayit) : VARSAYILAN_KATEGORILER;
}
