let sepet = JSON.parse(localStorage.getItem('toysshop_sepet') || '[]');

// Kategorileri çiz
function kategorileriCiz() {
  const grid = document.getElementById('kategoriGrid');
  grid.innerHTML = kategorileriGetir().map(k =>
    `<div class="kategori-card" style="background:${k.renk}">
      <div style="font-size:40px">${k.emoji}</div>${k.ad}
    </div>`).join('');
}

// Ürünleri çiz (renkli görsel kutulu)
function urunleriCiz(liste) {
  const grid = document.getElementById('urunGrid');
  if (!liste) liste = urunleriGetir();
  if (liste.length === 0) { grid.innerHTML = '<p>Ürün bulunamadı.</p>'; return; }
  grid.innerHTML = liste.map(u =>
    `<div class="urun-card">
      <div class="urun-gorsel" style="background:${u.renk||'#f8f8fc'}">
        ${u.rozet ? `<span class="rozet">${u.rozet}</span>` : ''}
        <span class="urun-emoji">${u.emoji}</span>
      </div>
      <h4>${u.ad}</h4>
      <div class="puan">⭐ ${u.puan} (${u.yorum})</div>
      <div class="fiyat">${u.fiyat.toFixed(2)} TL</div>
      <button onclick="sepeteEkle(${u.id})">🛒 Sepete Ekle</button>
    </div>`).join('');
}

// Sepete ekle
function sepeteEkle(id) {
  const urun = urunleriGetir().find(u => u.id === id);
  sepet.push(urun);
  localStorage.setItem('toysshop_sepet', JSON.stringify(sepet));
  sepetiGuncelle();
  sepetiAc();
}

// Rastgele ürün ekle
function rastgeleEkle() {
  const liste = urunleriGetir();
  const rastgele = liste[Math.floor(Math.random() * liste.length)];
  sepet.push(rastgele);
  localStorage.setItem('toysshop_sepet', JSON.stringify(sepet));
  sepetiGuncelle();
  sepetiAc();
}

function sepettenCikar(index) {
  sepet.splice(index, 1);
  localStorage.setItem('toysshop_sepet', JSON.stringify(sepet));
  sepetiGuncelle();
}
function sepetiGuncelle() {
  document.getElementById('sepetSayi').textContent = sepet.length;
  const icerik = document.getElementById('sepetIcerik');
  if (sepet.length === 0) { icerik.innerHTML = '<p style="color:#999">Sepetiniz boş.</p>'; }
  else {
    icerik.innerHTML = sepet.map((u,i) =>
      `<div class="sepet-urun">
        <div class="sepet-mini" style="background:${u.renk||'#f8f8fc'}">${u.emoji}</div>
        <span>${u.ad}<br><b>${u.fiyat.toFixed(2)} TL</b></span>
        <button onclick="sepettenCikar(${i})">Sil</button>
      </div>`).join('');
  }
  const toplam = sepet.reduce((t,u) => t + u.fiyat, 0);
  document.getElementById('sepetToplam').textContent = toplam.toFixed(2);
}
function sepetiAc() {
  document.getElementById('sepetPanel').classList.add('acik');
  document.getElementById('overlay').classList.add('acik');
}
function sepetiKapat() {
  document.getElementById('sepetPanel').classList.remove('acik');
  document.getElementById('overlay').classList.remove('acik');
}

// Hesap modalı (sadece görünüm)
function hesapAc() {
  document.getElementById('hesapModal').classList.add('acik');
}
function hesapKapat() {
  document.getElementById('hesapModal').classList.remove('acik');
}
function hesapTab(tip) {
  const giris = document.getElementById('girisForm');
  const kayit = document.getElementById('kayitForm');
  const tabG = document.getElementById('tabGiris');
  const tabK = document.getElementById('tabKayit');
  if (tip === 'giris') {
    giris.style.display = 'block'; kayit.style.display = 'none';
    tabG.classList.add('aktif'); tabK.classList.remove('aktif');
  } else {
    giris.style.display = 'none'; kayit.style.display = 'block';
    tabK.classList.add('aktif'); tabG.classList.remove('aktif');
  }
}

// Arama
function aramaYap() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  const sonuc = urunleriGetir().filter(u => u.ad.toLowerCase().includes(q));
  urunleriCiz(sonuc);
}
document.getElementById('searchInput').addEventListener('keyup', e => {
  if (e.key === 'Enter') aramaYap();
});

// Başlat
kategorileriCiz();
urunleriCiz();
sepetiGuncelle();
