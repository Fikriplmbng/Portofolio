# Portofolio Pribadi - Fikriplmbng

Website ini adalah portofolio digital resmi milik **Muhammad Fikri Palembang**, seorang mahasiswa Teknik Informatika di Universitas Muhammadiyah Maluku Utara (UMMU). Website ini dirancang untuk menampilkan riwayat pendidikan, prestasi, serta proyek-proyek pengembangan web dan desain UI/UX.

Mengusung tema **"Dark Navy & Orange Glow"**, website ini menonjolkan estetika modern yang menggabungkan latar belakang desain grafis dengan kemampuan teknis pemrograman.

## Teknologi yang Digunakan

Website ini dibangun menggunakan teknologi web standar tanpa framework berat, untuk memastikan performa yang cepat dan kode yang mudah dipelajari:

* **HTML5**: Struktur semantik halaman web.
* **CSS3**: Styling lanjutan menggunakan CSS Variables, Flexbox, dan Grid Layout.
    * *Responsive Design*: Mendukung tampilan Desktop, dan Mobile.
    * *Custom Animations*: Transisi halus pada hover, modal, dan slider.
* **JavaScript (Vanilla)**: Logika interaktif tanpa library tambahan (jQuery-free).
    * *DOM Manipulation*: Untuk Slider Carousel, Modal Popup, dan Burger Menu.
* **FontAwesome 6**: Ikon vektor untuk sosial media dan elemen antarmuka.
* **Google Fonts**: Menggunakan kombinasi font *Playfair Display* (Heading) dan *Poppins* (Body).

## Fitur Utama

1.  **Responsive Navigation**: Menu navigasi yang otomatis berubah menjadi *Burger Menu* dengan animasi slide-in pada tampilan mobile.
2.  **Infinite Carousel Slider**:
    * Digunakan pada halaman **Prestasi** dan **Portofolio**.
    * Mendukung *Infinite Loop* (geser tanpa batas).
    * Tampilan mobile yang dioptimalkan (Single Card Focus) ala aplikasi mobile modern.
3.  **Interactive Timeline**: Halaman *About* menampilkan riwayat pendidikan dalam bentuk timeline vertikal yang interaktif.
4.  **Detail Modals (Popups)**:
    * Klik pada item timeline atau sertifikat prestasi untuk memunculkan jendela popup berisi detail lengkap tanpa perlu memuat ulang halaman.
5.  **Glassmorphism Contact Form**: Formulir kontak dengan desain kartu semi-transparan dan efek *glow* pada input.

## Struktur Folder

Berikut adalah susunan file dan folder dalam proyek ini:

```text
/ (Root Directory)
│
├── html/
|   ├── index.html          # Halaman Utama (Hero Section)
|   ├── about.html          # Halaman Tentang Saya & Riwayat Pendidikan
|   ├── prestasi.html       # Halaman Sertifikat & Pencapaian
|   ├── portfolio.html      # Halaman Galeri Proyek Kuliah/Pribadi
|   └── contact.html        # Halaman Kontak & Sosial Media
│
├── css/
│   └── style.css           # File CSS utama (Global Styles & Responsiveness)
│
├── js/
│   └── script.js           # Logika JavaScript (Slider, Modal, Menu)
│
├── img/                    # Folder penyimpanan aset gambar
|   ├── imk.png                         # Proyek Web IMK
|   ├── KOSSMI_page-0001.jpg            # Sertifikat KOSSMI
|   ├── KSM_page-0001                   # Sertifikat KSM Geo
|   ├── KSN_page-0001.jpg               # Sertifikat KSN Geo
|   ├── laptop.webp                     # Review Laptop
|   ├── Machine Learning_page-0001.jpg  # Sertifikat Machine Learning
│   ├── me.jpg                          # Foto profil
│   ├── web.png                         # Proyek Web Portofolio
│   └── xiaomi.jpg                      # Review Xiaomi 14T
│
└── README.md           # Dokumentasi Proyek
```