import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./DaftarAlat.css";

const initialAlat = [
  {
    nama: "Mikroskop XYZ",
    kode: "BIO-001",
    kategori: "Biologi",
    status: "Tersedia",
    aksi: "Pinjam",
  },
  {
    nama: "Laptop ABC",
    kode: "SI-002",
    kategori: "Sistem Informasi",
    status: "Tersedia",
    aksi: "Pinjam",
  },
  {
    nama: "Kalkulator Matematika",
    kode: "MAT-001",
    kategori: "Matematika",
    status: "Tersedia",
    aksi: "Tidak tersedia",
  },
  {
    nama: "Multimeter Digital",
    kode: "FIS-004",
    kategori: "Fisika",
    status: "Tersedia",
    aksi: "Tidak tersedia",
  },
  {
    nama: "Komputer",
    kode: "SI-001",
    kategori: "Sistem Informasi",
    status: "Tersedia",
    aksi: "Tidak tersedia",
  },
  {
    nama: "Proyektor",
    kode: "SI-002",
    kategori: "Sistem Informasi",
    status: "Tersedia",
    aksi: "Tidak tersedia",
  },
  {
    nama: "Alat Pengukur Suhu",
    kode: "FIS-002",
    kategori: "Fisika",
    status: "Tersedia",
    aksi: "Tidak tersedia",
  },
  {
    nama: "Alat Ukur PH",
    kode: "FIS-007",
    kategori: "Fisika",
    status: "Tersedia",
    aksi: "Tidak tersedia",
  },
  {
    nama: "Keyboard",
    kode: "SI-003",
    kategori: "Sistem Informasi",
    status: "Tersedia",
    aksi: "Tidak tersedia",
  },
  {
    nama: "Alat Ukur Tegangan Listrik",
    kode: "FIS-010",
    kategori: "Fisika",
    status: "Tersedia",
    aksi: "Tidak tersedia",
  },
];

const DaftarAlat = () => {
  const [selectedKategori, setSelectedKategori] = useState("");
  const navigate = useNavigate();

  const filteredAlat = selectedKategori
    ? initialAlat.filter((item) => item.kategori === selectedKategori)
    : initialAlat;

  return (
    <main className="main-area">
      <div className="header-bar">
        <button className="back-button" onClick={() => navigate("/dashboard")}>
          <FaArrowLeft />
        </button>
        <h2>Daftar Alat Laboratorium</h2>
      </div>

      <div className="filter-section">
        <select
          value={selectedKategori}
          onChange={(e) => setSelectedKategori(e.target.value)}
          required
        >
          <option value="" disabled hidden>
            Pilih Laboratorium
          </option>
          <option value="">Semua Laboratorium</option>
          <option value="Biologi">Biologi</option>
          <option value="Sistem Informasi">Sistem Informasi</option>
          <option value="Matematika">Matematika</option>
          <option value="Fisika">Fisika</option>
        </select>
        <input type="text" placeholder="Cari alat" />
        <button>Refresh</button>
      </div>

      <table className="alat-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama alat</th>
            <th>Kode alat</th>
            <th>Kategori</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {filteredAlat.map((item, index) => (
            <tr key={`${item.kode}-${index}`}>
              <td>{index + 1}</td>
              <td>{item.nama}</td>
              <td>{item.kode}</td>
              <td>{item.kategori}</td>
              <td>
                <span className="status-label">
                  <span className="dot-status"></span> {item.status}
                </span>
              </td>
              <td>
                {item.aksi === "Pinjam" && (
                  <button className="btn-aksi btn-pinjam">📦 Pinjam</button>
                )}
                {item.aksi === "Tidak tersedia" && (
                  <button className="btn-aksi btn-tidak" disabled>
                    ⛔ Tidak tersedia
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default DaftarAlat;
