// ==== ÜRÜNLER ====
const VARSAYILAN_URUNLER = [
  { id:1, ad:"Labubu Figür Koleksiyon Oyuncağı", fiyat:399.90, emoji:"🐰", renk:"#fce7f3", puan:4.9, yorum:345, kategori:"Figürler", rozet:"ÇOK SATAN" },
  { id:2, ad:"Pop It Elektronik Hızlı Bas Oyunu", fiyat:254.90, emoji:"🌈", renk:"#dbeafe", puan:4.8, yorum:201, kategori:"Pop It", rozet:"VİRAL" },
  { id:3, ad:"Elektronik Boks Antrenman Makinesi", fiyat:899.90, emoji:"🥊", renk:"#fee2e2", puan:4.9, yorum:87, kategori:"Oyunlar", rozet:"" },
  { id:4, ad:"4x4 Uzaktan Kumandalı Off-Road Araba", fiyat:789.90, emoji:"🚙", renk:"#e0e7ff", puan:4.9, yorum:156, kategori:"Kumandalı", rozet:"YENİ" },
  { id:5, ad:"TikTok Toys Sürpriz Kutu", fiyat:249.90, emoji:"🎁", renk:"#fef3c7", puan:4.8, yorum:312, kategori:"Sürpriz", rozet:"VİRAL" },
  { id:6, ad:"Akıl & Zeka Küpü Seti", fiyat:149.90, emoji:"🧩", renk:"#d1fae5", puan:4.7, yorum:98, kategori:"Zeka", rozet:"" },
  { id:7, ad:"Sevimli Peluş Sırt Çantası", fiyat:329.90, emoji:"🎒", renk:"#fae8ff", puan:4.8, yorum:174, kategori:"Aksesuar", rozet:"" },
  { id:8, ad:"LED Işıklı Fidget Spinner", fiyat:89.90, emoji:"💫", renk:"#cffafe", puan:4.6, yorum:263, kategori:"Fidget", rozet:"ÇOK SATAN" },
  { id:9, ad:"Mini Drone Kameralı Uçan Araç", fiyat:1299.90, emoji:"🚁", renk:"#ede9fe", puan:4.9, yorum:64, kategori:"Kumandalı", rozet:"YENİ" },
  { id:10, ad:"Slime Yapım Seti Jumbo Paket", fiyat:179.90, emoji:"🫧", renk:"#dcfce7", puan:4.7, yorum:198, kategori:"DIY", rozet:"VİRAL" },
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
