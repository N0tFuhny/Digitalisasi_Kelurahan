let beritaList = JSON.parse(localStorage.getItem("berita")) || [];

function renderBerita() {
    const grid = document.getElementById("beritaGrid");
    if (!grid) return;

    grid.innerHTML = "";

    const q = (document.getElementById("searchInputBerita")?.value || "").toLowerCase();

    let filtered = beritaList.filter(b => b.judul.toLowerCase().includes(q) || b.deskripsi.toLowerCase().includes(q));

    // Sort by date descending (newest first)
    filtered.sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));

    if (filtered.length === 0) {
        grid.innerHTML = `<p class="empty-state">Belum ada berita yang diterbitkan.</p>`;
        return;
    }

    filtered.forEach(b => {
        const card = document.createElement("div");
        card.className = "berita-card";

        // Highlight search term
        let finalJudul = b.judul;
        if (q) {
            const escapedQ = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            finalJudul = b.judul.replace(new RegExp(escapedQ, "gi"), m => `<mark style="background:#ffe08a; padding:0 2px;">${m}</mark>`);
        }

        card.innerHTML = `
      <img src="${b.image || 'img/gedung kelurahan.jpg'}">
      <div class="berita-card-content">
        <h3>${finalJudul}</h3>
        <span class="berita-meta">🗓️ ${b.tanggal || 'Tanpa Tanggal'} | ✍️ Admin</span>
        <p>${b.deskripsi}</p>
      </div>
    `;

        grid.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", renderBerita);
