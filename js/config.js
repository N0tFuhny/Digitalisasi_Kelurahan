// Configuration for the Kelurahan Website Template
// Edit the values below to customize the website for a specific Kelurahan

const KELURAHAN_CONFIG = {
    // Basic Info
    namaKelurahan: "Kelurahan Lagoa",
    logoPath: "img/logo kelurahan.jpg",

    // Tagline & Description for Hero Section
    heroTitle: "Selamat Datang Di",
    heroDescription: "Website ini menyediakan informasi kegiatan-kegiatan, pelayanan administrasi, dan pengumuman resmi di lingkungan kelurahan.",

    // History / Profile (HTML Allowed)
    sejarah: `
    <p>Kelurahan Lagoa berkomitmen untuk memberikan informasi yang transparan dan mudah diakses oleh seluruh warga. Wilayah ini telah berkembang dari sebuah perkampungan menjadi kawasan yang tertata rapi dengan berbagai fasilitas publik yang memadai.</p>
    <br>
    <p>Dengan hadirnya website ini, warga dapat dengan mudah mengetahui jadwal, lokasi, detail setiap kegiatan, dan membaca berita terbaru yang diselenggarakan oleh kelurahan, sehingga partisipasi masyarakat dapat lebih optimal dan komunikasi antara aparat kelurahan dengan warga menjadi lebih baik.</p>
  `,

    // Contact & Social Media
    kontak: {
        alamat: "Jl. Mengkudu No.1, RT.1/RW.1, Lagoa, Kec. Koja, Jkt Utara",
        email: "kontak@lagoa.jakarta.go.id",
        telepon: "(021) 43932824",
        // Embed URL from Google Maps (Click 'Share' -> 'Embed a map' -> copy the 'src' link)
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.56162029333!2d106.9107897!3d-6.114106600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1ff56b7b9fad%3A0xe2d8ed9cb35d96d4!2sKantor%20Lurah%20Lagoa!5e0!3m2!1sid!2sid!4v1764494807159!5m2!1sid!2sid"
    },

    // Social Media Links (Leave empty string "" if not used)
    sosialMedia: {
        instagram: "https://instagram.com/kel_lagoa",
        facebook: "https://facebook.com/kelurahan.lagoa",
        twitter: "https://twitter.com/lagoa_update"
    },

    // Admin Data (For Template Purposes Only - Do not use this method in Production with sensitive data)
    admin: {
        username: "admin",
        password: "123"
    },

    // citizen services data
    layanan: [
        {
            id: "ktp",
            judul: "Pengantar KTP/KK Baru",
            deskripsi: "Syarat dan tahapan untuk mengurus Kartu Tanda Penduduk atau Kartu Keluarga baru.",
            icon: "file-text",
            syarat: [
                "Surat Pengantar RT/RW",
                "Fotokopi KK Lama (jika ada)",
                "Pas foto ukuran 3x4 (2 lembar)"
            ]
        },
        {
            id: "sktm",
            judul: "Surat Keterangan Tidak Mampu (SKTM)",
            deskripsi: "Persyaratan untuk mendapatkan surat keterangan tidak mampu untuk keperluan sekolah/rumah sakit.",
            icon: "heart",
            syarat: [
                "Surat Pengantar RT/RW",
                "Fotokopi KTP dan KK",
                "Surat pernyataan miskin bermaterai"
            ]
        },
        {
            id: "domisili",
            judul: "Surat Keterangan Domisili",
            deskripsi: "Surat yang menerangkan bahwa warga benar-benar tinggal di wilayah kelurahan ini.",
            icon: "map-pin",
            syarat: [
                "Surat Pengantar RT/RW",
                "Fotokopi KTP dan KK",
                "Surat pengantar perusahaan (jika untuk keperluan kantor)"
            ]
        }
    ]
};
