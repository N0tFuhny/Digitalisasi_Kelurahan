# Digitalisasi Kelurahan — Website Template

## 📌 Deskripsi Proyek

**Digitalisasi Kelurahan** adalah template website berbasis **HTML, CSS, dan JavaScript** yang dirancang sebagai *proof of concept* untuk digitalisasi informasi publik di tingkat kelurahan.

Proyek ini berfokus pada penyediaan halaman informasi kegiatan yang **mudah dikelola**, **ringan**, dan **reusable**, tanpa ketergantungan backend server. Seluruh data dikelola menggunakan `localStorage`, sehingga cocok untuk demonstrasi, prototipe, dan pengembangan awal sebelum migrasi ke sistem backend.

Template ini **bukan sekadar landing page**, melainkan simulasi sistem informasi publik sederhana yang mendekati kebutuhan nyata instansi pemerintahan tingkat kelurahan.

---

## 🎯 Tujuan Proyek

* Menyediakan template website kelurahan yang **mudah digunakan dan dikembangkan**
* Mensimulasikan sistem pengelolaan informasi publik tanpa backend
* Menjadi **proof of concept digitalisasi kelurahan**
* Menjadi dasar untuk pengembangan sistem e-government yang lebih kompleks

---

## ✨ Fitur Utama

### 🔓 Mode Publik

* Menampilkan daftar informasi / kegiatan kelurahan
* Fitur **search (pencarian teks)**
* **Sorting** berdasarkan tanggal (terbaru / terlama)
* **Filtering** berdasarkan tanggal dan lokasi
* Highlight otomatis pada keyword hasil pencarian
* Tampilan responsif untuk desktop dan mobile

### 🔐 Mode Admin

* Login admin berbasis `localStorage`
* Panel admin otomatis muncul saat admin login
* Tambah kegiatan tanpa mengubah kode
* Upload gambar untuk setiap kegiatan
* Hapus kegiatan langsung dari UI
* Perbedaan tampilan jelas antara mode publik dan admin

> ⚠️ **Catatan:** Mode admin pada proyek ini bersifat *client-side only* dan digunakan untuk simulasi, bukan untuk produksi.

---

## 🧩 Teknologi yang Digunakan

* **HTML5** — Struktur halaman
* **CSS3** — Styling dan layout responsif
* **JavaScript (Vanilla)** — Logika aplikasi
* **LocalStorage** — Penyimpanan data sementara
* **Feather Icons** — Ikon antarmuka

Tidak menggunakan framework atau library berat untuk menjaga performa dan kesederhanaan.

---

## 📂 Struktur Folder

```
project-root/
│
├── index.html          # Halaman utama
├── informasi.html      # Halaman informasi kegiatan
├── login.html          # Halaman login admin
│
├── css/
│   └── style.css       # Seluruh styling website
│
├── js/
│   ├── script.js       # Logika umum (login, navbar, dsb)
│   └── informasi.js    # Logika halaman informasi kegiatan
│
├── img/                # Gambar statis (logo, hero, dsb)
└── README.md
```

---

## 🚀 Cara Menjalankan Proyek

1. Clone repository ini:

   ```bash
   git clone https://github.com/username/digitalisasi-kelurahan.git
   ```
2. Buka file `index.html` menggunakan browser
3. Login sebagai admin melalui `login.html`
4. Kelola informasi kegiatan langsung dari halaman **Informasi**

Tidak memerlukan server atau database.

---

## 🔐 Mekanisme Admin (Singkat)

* Status admin disimpan di `localStorage`
* Jika admin login:

  * Panel admin muncul
  * Tombol hapus aktif
  * Mode admin diterapkan pada UI
* Jika logout:

  * Seluruh fitur admin disembunyikan

---

## 🛠️ Keterbatasan

* Tidak menggunakan backend
* Keamanan **tidak ditujukan untuk produksi**
* Data akan hilang jika `localStorage` dibersihkan

Proyek ini **fokus pada konsep dan arsitektur awal**, bukan sistem final.

---

## 🔮 Rencana Pengembangan (Opsional)

* Integrasi backend (Laravel / Node.js / Firebase)
* Autentikasi admin berbasis server
* Role management (admin, operator)
* Dashboard statistik kegiatan
* CMS kelurahan yang lebih lengkap

---

## 📄 Lisensi

Proyek ini bersifat **open-source** dan bebas digunakan untuk keperluan akademik, demonstrasi, maupun pengembangan lanjutan.

---

## ✍️ Catatan Akhir

Proyek ini dibuat sebagai bagian dari proses pembelajaran dan eksplorasi konsep digitalisasi layanan publik. Struktur dibuat sengaja sederhana agar mudah dipahami, dimodifikasi, dan dikembangkan lebih lanjut.

Jika Anda ingin menggunakan proyek ini sebagai dasar sistem yang lebih besar, **migrasi ke backend sangat disarankan**.
