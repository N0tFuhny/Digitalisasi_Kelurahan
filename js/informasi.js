const isAdmin = localStorage.getItem("isAdmin") === "true";

if (isAdmin) {
  document.body.classList.add("admin-mode");
}

const adminPanel = document.getElementById("adminPanel");
if (!isAdmin && adminPanel) adminPanel.remove();


let kegiatan = JSON.parse(localStorage.getItem("kegiatan")) || [];

function render(list) {
  const grid = document.getElementById("infoGrid");
  grid.innerHTML = "";

  list.forEach((k, i) => {
    const card = document.createElement("div");
    card.className = "info-card";
    card.dataset.date = k.tanggal;
    card.dataset.location = k.lokasi.toLowerCase();

    card.innerHTML = `
      <img src="${k.image}">
      <div class="content">
        <h3>${highlight(k.judul)}</h3>
        <small>${k.tanggal} | ${k.waktu} | ${k.lokasi}</small>
        <p>${k.deskripsi}</p>

        ${
          isAdmin
            ? `<button class="btn-delete" onclick="hapus(${i})">Hapus</button>`
            : ""
        }
      </div>
    `;

    grid.appendChild(card);
  });
}

function applyFilters() {
  const keyword = searchInput.value.toLowerCase();
  const loc = filterLocation.value.toLowerCase();
  const date = filterDate.value;
  const sort = sortSelect.value;

  let filtered = kegiatan.filter(k =>
    k.judul.toLowerCase().includes(keyword) &&
    (!loc || k.lokasi.toLowerCase().includes(loc)) &&
    (!date || k.tanggal === date)
  );

  filtered.sort((a, b) =>
    sort === "newest"
      ? new Date(b.tanggal) - new Date(a.tanggal)
      : new Date(a.tanggal) - new Date(b.tanggal)
  );

  render(filtered);
}

function highlight(text) {
  const q = searchInput.value;
  if (!q) return text;
  return text.replace(new RegExp(q, "gi"), m => `<mark>${m}</mark>`);
}

function tambahKegiatan() {
  const file = image.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    kegiatan.push({
      judul: judul.value,
      tanggal: tanggal.value,
      waktu: waktu.value,
      lokasi: lokasi.value,
      deskripsi: deskripsi.value,
      image: reader.result
    });

    localStorage.setItem("kegiatan", JSON.stringify(kegiatan));
    applyFilters();
  };

  reader.readAsDataURL(file);
}

function hapus(i) {
  if (confirm("Hapus kegiatan?")) {
    kegiatan.splice(i, 1);
    localStorage.setItem("kegiatan", JSON.stringify(kegiatan));
    applyFilters();
  }
}

applyFilters();
