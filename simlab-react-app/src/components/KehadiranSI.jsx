import React, { useState } from "react";
import Layout from "./Layout";
import "./KehadiranSI.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const KehadiranSI = () => {
  const navigate = useNavigate();
  const [selectedMatkul, setSelectedMatkul] = useState("");

  const daftarMatkul = [
    "Visualisasi Informasi",
    "Intelejen Bisnis",
    "Kapita Selekta",
    "Penambangan Proses",
    "Desain & Pemrograman SI",
  ];

  const dataKehadiran = {
    "Visualisasi Informasi": [
      {
        pertemuan: 1,
        tanggal: "10 Mei 2025",
        jam: "08.00 - 10.00",
        kelas: "A",
        status: "Hadir",
        keterangan: "Sakit",
      },
      {
        pertemuan: 2,
        tanggal: "11 Mei 2025",
        jam: "08.00 - 10.00",
        kelas: "A",
        status: "Tidak hadir",
        keterangan: "-",
      },
      {
        pertemuan: 3,
        tanggal: "12 Mei 2025",
        jam: "08.00 - 10.00",
        kelas: "A",
        status: "Hadir",
        keterangan: "-",
      },
    ],
    "Intelejen Bisnis": [
      {
        pertemuan: 1,
        tanggal: "13 Mei 2025",
        jam: "10.00 - 12.00",
        kelas: "C",
        status: "Hadir",
        keterangan: "-",
      },
      {
        pertemuan: 2,
        tanggal: "14 Mei 2025",
        jam: "10.00 - 12.00",
        kelas: "C",
        status: "Tidak hadir",
        keterangan: "Tanpa keterangan",
      },
      {
        pertemuan: 3,
        tanggal: "15 Mei 2025",
        jam: "10.00 - 12.00",
        kelas: "C",
        status: "Hadir",
        keterangan: "-",
      },
    ],
    "Kapita Selekta": [
      {
        pertemuan: 1,
        tanggal: "16 Mei 2025",
        jam: "14.00 - 16.00",
        kelas: "C",
        status: "Hadir",
        keterangan: "-",
      },
      {
        pertemuan: 2,
        tanggal: "17 Mei 2025",
        jam: "14.00 - 16.00",
        kelas: "C",
        status: "Hadir",
        keterangan: "-",
      },
      {
        pertemuan: 3,
        tanggal: "18 Mei 2025",
        jam: "14.00 - 16.00",
        kelas: "C",
        status: "Tidak hadir",
        keterangan: "-",
      },
    ],
    "Penambangan Proses": [
      {
        pertemuan: 1,
        tanggal: "19 Mei 2025",
        jam: "16.00 - 18.00",
        kelas: "D",
        status: "Hadir",
        keterangan: "-",
      },
      {
        pertemuan: 2,
        tanggal: "20 Mei 2025",
        jam: "16.00 - 18.00",
        kelas: "D",
        status: "Tidak hadir",
        keterangan: "Sakit",
      },
      {
        pertemuan: 3,
        tanggal: "21 Mei 2025",
        jam: "16.00 - 18.00",
        kelas: "D",
        status: "Hadir",
        keterangan: "-",
      },
    ],
    "Desain & Pemrograman SI": [
      {
        pertemuan: 1,
        tanggal: "22 Mei 2025",
        jam: "08.00 - 10.00",
        kelas: "F",
        status: "Hadir",
        keterangan: "-",
      },
      {
        pertemuan: 2,
        tanggal: "23 Mei 2025",
        jam: "08.00 - 10.00",
        kelas: "F",
        status: "Tidak hadir",
        keterangan: "-",
      },
      {
        pertemuan: 3,
        tanggal: "24 Mei 2025",
        jam: "08.00 - 10.00",
        kelas: "F",
        status: "Hadir",
        keterangan: "-",
      },
    ],
  };

  const dataTampil = selectedMatkul ? dataKehadiran[selectedMatkul] : [];

  return (
    <Layout>
      <div className="header-jadwal">
        <button className="back-btn" onClick={() => navigate("/dashboard")}>
          <FaArrowLeft />
        </button>
        <h2>Kehadiran</h2>
      </div>

      <div className="filter-bar">
        <select
          className="dropdown-matkul"
          value={selectedMatkul}
          onChange={(e) => setSelectedMatkul(e.target.value)}
        >
          {selectedMatkul === "" && <option value="">Pilih Mata Kuliah</option>}
          {daftarMatkul.map((matkul, index) => (
            <option key={index} value={matkul}>
              {matkul}
            </option>
          ))}
        </select>
      </div>

      {selectedMatkul && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Pertemuan</th>
                <th>Tanggal</th>
                <th>Mata Kuliah</th>
                <th>Jam</th>
                <th>Kelas</th>
                <th>Status Kehadiran</th>
                <th>Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {dataTampil.length > 0 ? (
                dataTampil.map((item, index) => (
                  <tr key={index}>
                    <td>{item.pertemuan}</td>
                    <td>{item.tanggal}</td>
                    <td>{selectedMatkul}</td>
                    <td>{item.jam}</td>
                    <td>{item.kelas}</td>
                    <td>{item.status}</td>
                    <td>{item.keterangan}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" style={{ textAlign: "center" }}>
                    Belum ada data kehadiran.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </Layout>
  );
};

export default KehadiranSI;
