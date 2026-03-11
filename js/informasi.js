// Check login script.js already manages navbar view
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
      <img src="${k.image || 'img/kegiatan/1.jpg'}">
      <div class="content">
        <h3>${highlight(k.judul)}</h3>
        <small>${k.tanggal} | ${k.waktu || ''} | ${k.lokasi}</small>
        <p>${k.deskripsi}</p>
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
  const escapedQ = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(new RegExp(escapedQ, "gi"), m => `<mark>${m}</mark>`);
}

applyFilters();
