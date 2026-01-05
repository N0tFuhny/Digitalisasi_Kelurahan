const isAdmin = localStorage.getItem("isAdmin") === "true";
const adminPanel = document.getElementById("adminPanel");

if (isAdmin && adminPanel) adminPanel.style.display = "block";

let kegiatan = JSON.parse(localStorage.getItem("kegiatan")) || [];

function renderKegiatan() {
  const grid = document.getElementById("infoGrid");
  grid.innerHTML = "";

  kegiatan.forEach((item, i) => {
    const card = document.createElement("div");

    card.className = "info-card";
    card.dataset.date = item.tanggal;
    card.dataset.lokasi = item.lokasi.toLowerCase();

    card.innerHTML = `
      <img src="${item.image}">
      <div class="content">
        <h3>${item.judul}</h3>
        <small>${item.tanggal} | ${item.lokasi}</small>
        <p>${item.deskripsi}</p>
        ${isAdmin ? `<button onclick="hapus(${i})">Hapus</button>` : ""}
      </div>
    `;

    grid.appendChild(card);
  });
}

function tambahKegiatan() {
  const reader = new FileReader();
  const file = image.files[0];

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
    renderKegiatan();
  };

  reader.readAsDataURL(file);
}

function hapus(i) {
  kegiatan.splice(i, 1);
  localStorage.setItem("kegiatan", JSON.stringify(kegiatan));
  renderKegiatan();
}

renderKegiatan();
