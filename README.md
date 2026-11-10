# tektaksi34

İstanbul taksi & havalimanı transfer sitesi. Talepler WhatsApp'tan gelir.

- `index.html` – site
- `fiyatlar.txt` – fiyat listesi (her satır: `Yer 1 - Yer 2 Fiyat`, iki yön geçerli; "TEK İLANDAN" bölümü kullanılmaz). Fiyatlar bütün saatlerin ortalamasıdır; "SAAT FARKI" bölümündeki satırlar (ör. `hafta içi 16-20 +3`) o saatlerde fiyatı yüzde olarak artırır/azaltır (İstanbul saati), sonra 100 TL'ye yuvarlanır. Listede fiyatı olmayan güzergâhlarda site iki yeri haritada bulur (Photon/OpenStreetMap), yol mesafesini ölçer (OSRM) ve "KM TARİFESİ" bölümüne göre kademeli hesaplar; bu bölüm silinirse index.html içindeki aynı tarife (KM_VARSAYILAN) kullanılır
- `manifest.webmanifest`, `sw.js`, `icon-*.png` – telefona uygulama gibi yükleme
- `og.png` – WhatsApp'ta link paylaşınca çıkan görsel
