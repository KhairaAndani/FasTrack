// variable global untuk menyimpan data laporan
let daftarLaporan = [];

// fungsi muat data itu dieksekusi ketika halaman html selesai dimuat
document.addEventListener('DOMContentLoaded', muatData());

// READ => mengambil data dari data.js
function muatData() {
    daftarLaporan = typeof dataAwalLaporan !== 'undefined' ? [...dataAwalLaporan] : [];
    // console.log(daftarLaporan);
    tampilkanDataTabel();
}

// menampilkan data ke halaman web 
function tampilkanDataTabel() {
    const tabelBody = document.getElementById('reports-tabel-body');

    // memastikkan tabelbody kosong
    tabelBody.innerHTML = '';

    //menampilakan baris data
    daftarLaporan.forEach((laporan) => {
        tabelBody.appendChild(buatBarisLaporan(laporan));
    })
}

// membuat satu baris <tr> untuk satu laporan
function buatBarisLaporan(laporan) {
    const baris = document.createElement('tr');

    baris.innerHTML = `
    <td class="cell-reporter">
    <span class="name>${laporan.pelapor}</span>

    <td class="cell-category">
    <span class="category-badge>${laporan.kategori}</span>
    </td>

    <td class="cell-desc">
    <span class="category-badge>${laporan.deskripsi}</span>
    </td>
    `
    return baris;
}