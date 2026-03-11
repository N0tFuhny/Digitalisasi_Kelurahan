let kegiatan = JSON.parse(localStorage.getItem("kegiatan")) || [];
let beritaList = JSON.parse(localStorage.getItem("berita")) || [];

function renderKegiatan() {
  const listContainer = document.getElementById("adminKegiatanList");
  if (!listContainer) return;
  listContainer.innerHTML = "";

  if (kegiatan.length === 0) {
    listContainer.innerHTML = "<p style='color:#ccc'>Belum ada kegiatan.</p>";
    return;
  }

  kegiatan.forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "admin-card";

    card.innerHTML = `
      <div style="display:flex; align-items:center;">
        <img src="${item.image || 'img/kegiatan/1.jpg'}">
        <div class="admin-card-info">
          <h4>${item.judul}</h4>
          <p>${item.tanggal} | ${item.waktu || ''} | ${item.lokasi}</p>
        </div>
      </div>
      <button class="btn-delete" onclick="hapus('${item.id ? item.id : i}')">Hapus</button>
    `;

    listContainer.appendChild(card);
  });
}

function tambahKegiatan() {
  const judulInput = document.getElementById("judul");
  const tanggalInput = document.getElementById("tanggal");
  const waktuInput = document.getElementById("waktu");
  const lokasiInput = document.getElementById("lokasi");
  const deskripsiInput = document.getElementById("deskripsi");
  const imageInput = document.getElementById("image");

  if (!judulInput.value.trim() || !tanggalInput.value.trim()) {
    alert("Judul dan Tanggal wajib diisi!");
    return;
  }

  const file = imageInput.files[0];
  if (file) {
    if (file.size > 1024 * 1024) { // 1MB limit for localStorage
      alert("Ukuran gambar terlalu besar (maksimal 1MB).");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      saveData(reader.result, judulInput, tanggalInput, waktuInput, lokasiInput, deskripsiInput);
    };
    reader.readAsDataURL(file);
  } else {
    // Save without image
    saveData("", judulInput, tanggalInput, waktuInput, lokasiInput, deskripsiInput);
  }
}

function saveData(imgData, j, t, w, l, d) {
  kegiatan.push({
    id: Date.now().toString() + "_" + Math.random().toString(36).substr(2, 5),
    judul: j.value.trim(),
    tanggal: t.value,
    waktu: w.value,
    lokasi: l.value,
    deskripsi: d.value,
    image: imgData
  });

  localStorage.setItem("kegiatan", JSON.stringify(kegiatan));
  renderKegiatan();

  // clear form
  j.value = ""; t.value = ""; w.value = ""; l.value = ""; d.value = "";
  document.getElementById("image").value = "";
  alert("Kegiatan berhasil ditambahkan!");
}

window.hapus = function (id) {
  if (confirm("Yakin ingin menghapus kegiatan ini?")) {
    kegiatan = kegiatan.filter((k, index) => (k.id || index.toString()) !== id.toString());
    localStorage.setItem("kegiatan", JSON.stringify(kegiatan));
    renderKegiatan();
  }
}

// =======================
//   BERITA LOGIC
// =======================

function renderBerita() {
  const listContainer = document.getElementById("adminBeritaList");
  if (!listContainer) return;
  listContainer.innerHTML = "";

  if (beritaList.length === 0) {
    listContainer.innerHTML = "<p style='color:#ccc'>Belum ada berita.</p>";
    return;
  }

  beritaList.forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "admin-card";

    card.innerHTML = `
      <div style="display:flex; align-items:center;">
        <img src="${item.image || 'img/gedung kelurahan.jpg'}">
        <div class="admin-card-info">
          <h4>${item.judul}</h4>
          <p>${item.tanggal}</p>
        </div>
      </div>
      <button class="btn-delete" onclick="hapusBerita('${item.id || i}')">Hapus</button>
    `;

    listContainer.appendChild(card);
  });
}

function tambahBerita() {
  const judulInput = document.getElementById("judulBerita");
  const tanggalInput = document.getElementById("tanggalBerita");
  const deskripsiInput = document.getElementById("deskripsiBerita");
  const imageInput = document.getElementById("imageBerita");

  if (!judulInput.value.trim() || !tanggalInput.value.trim() || !deskripsiInput.value.trim()) {
    alert("Judul, Tanggal, dan Deskripsi wajib diisi!");
    return;
  }

  const file = imageInput.files[0];
  if (file) {
    if (file.size > 1024 * 1024) { // 1MB limit for localStorage
      alert("Ukuran gambar terlalu besar (maksimal 1MB).");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      saveBerita(reader.result, judulInput, tanggalInput, deskripsiInput);
    };
    reader.readAsDataURL(file);
  } else {
    // Save without image
    saveBerita("", judulInput, tanggalInput, deskripsiInput);
  }
}

function saveBerita(imgData, j, t, d) {
  beritaList.push({
    id: Date.now().toString() + "_b_" + Math.random().toString(36).substr(2, 5),
    judul: j.value.trim(),
    tanggal: t.value,
    deskripsi: d.value,
    image: imgData
  });

  localStorage.setItem("berita", JSON.stringify(beritaList));
  renderBerita();

  // clear form
  j.value = ""; t.value = ""; d.value = "";
  document.getElementById("imageBerita").value = "";
  alert("Berita berhasil ditambahkan!");
}

window.hapusBerita = function (id) {
  if (confirm("Yakin ingin menghapus berita ini?")) {
    beritaList = beritaList.filter((b, index) => (b.id || index.toString()) !== id.toString());
    localStorage.setItem("berita", JSON.stringify(beritaList));
    renderBerita();
  }
}

// INIT
renderKegiatan();
renderBerita();
