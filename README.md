
---

````markdown
# Slider WhatsApp

## Deskripsi

**Slider WhatsApp** adalah komponen front-end interaktif berbasis JavaScript/HTML/CSS yang memungkinkan pengguna menghubungi Anda secara langsung melalui WhatsApp hanya dengan satu klik. Komponen ini biasanya digunakan pada website bisnis atau toko online untuk meningkatkan interaksi dan konversi pelanggan.

---

## Fitur

- 🔄 **Slider animasi** responsif dan modern
- 📱 **Tombol WhatsApp** dengan ikon dan teks yang dapat dikustomisasi
- ⚙️ **Pengaturan posisi** (kanan/kiri atas/bawah halaman)
- 💬 **Pesan otomatis** saat tombol diklik
- 🎨 **Dukungan tema warna dan gaya custom**

---

## Pratinjau

![Contoh Slider WhatsApp](preview.png)

---

## Cara Menggunakan

### 1. Tambahkan kode HTML berikut ke dalam body situs Anda:

```html
<div id="wa-slider">
  <a href="https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20dengan%20produk%20Anda" target="_blank">
    <img src="whatsapp-icon.png" alt="WhatsApp" />
    <span>Chat via WhatsApp</span>
  </a>
</div>
````

### 2. Tambahkan CSS untuk slider:

```css
#wa-slider {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #25D366;
  border-radius: 50px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  z-index: 1000;
  transition: all 0.3s ease-in-out;
}

#wa-slider img {
  width: 24px;
  margin-right: 10px;
}

#wa-slider span {
  color: white;
  font-weight: bold;
}
```

### 3. (Opsional) Tambahkan animasi JavaScript jika ingin membuat slider dinamis:

```javascript
window.addEventListener('scroll', () => {
  const slider = document.getElementById('wa-slider');
  if (window.scrollY > 100) {
    slider.style.transform = 'translateX(0)';
  } else {
    slider.style.transform = 'translateX(100%)';
  }
});
```

---

## Konfigurasi

| Konfigurasi    | Deskripsi                                             | Contoh                                                 |
| -------------- | ----------------------------------------------------- | ------------------------------------------------------ |
| Nomor WhatsApp | Nomor telepon aktif Anda (dalam format internasional) | `6281234567890`                                        |
| Pesan default  | Pesan awal saat pengguna membuka chat                 | `text=Halo%20saya%20tertarik%20dengan%20produk%20Anda` |
| Posisi         | Lokasi slider muncul (kanan/kiri bawah/atas)          | `right: 20px; bottom: 20px;`                           |

---

## Lisensi

Proyek ini dilisensikan di bawah MIT License – silakan gunakan, ubah, dan distribusikan dengan bebas.

---

## Kontribusi

Kontribusi sangat disambut! Anda dapat:

* Fork repositori ini
* Buat branch fitur (`git checkout -b fitur-baru`)
* Commit perubahan (`git commit -m 'Tambah fitur X'`)
* Push ke branch (`git push origin fitur-baru`)
* Buat Pull Request

---


## Credits

Dikembangkan oleh **Dwi Bakti N Dev**
Ikon WhatsApp dari [Flaticon](https://www.flaticon.com/)

```
