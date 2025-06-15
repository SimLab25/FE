import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./JadwalLaboratorium.css";

const JadwalLaboratorium = () => {
  const [selectedLab, setSelectedLab] = useState("");
  const navigate = useNavigate();

  const jadwalData = [
    {
      hari: "Senin",
      jam: "08:00-10:00",
      matkul: "Visualisasi Data",
      ruangan: "PTI",
      peserta: 50,
    },
    {
      hari: "Selasa",
      jam: "08:00-10:00",
      matkul: "Praktikum Visualisasi Informasi",
      ruangan: "SBTI",
      peserta: 50,
    },
    {
      hari: "Rabu",
      jam: "08:00-10:00",
      matkul: "Praktikum Visualisasi Informasi",
      ruangan: "SBTI",
      peserta: 50,
    },
    {
      hari: "Kamis",
      jam: "08:00-10:00",
      matkul: "Praktikum Visualisasi Informasi",
      ruangan: "SBTI",
      peserta: 50,
    },
    {
      hari: "Jumat",
      jam: "08:00-10:00",
      matkul: "Praktikum Visualisasi Informasi",
      ruangan: "PTI",
      peserta: 50,
    },
    {
      hari: "Sabtu",
      jam: "08:00-10:00",
      matkul: "Praktikum Visualisasi Informasi",
      ruangan: "PTI",
      peserta: 50,
    },
    {
      hari: "Minggu",
      jam: "08:00-10:00",
      matkul: "Praktikum Visualisasi Informasi",
      ruangan: "PTI",
      peserta: 50,
    },
  ];

  const filteredData = selectedLab
    ? jadwalData.filter((item) => item.ruangan === selectedLab)
    : jadwalData;

  return (
    <main className="jadwal-container">
      <div className="header-jadwal">
        <button className="back-btn" onClick={() => navigate("/dashboard")}>
          <FaArrowLeft />
        </button>
        <h2>Jadwal Laboratorium</h2>
      </div>

      <div className="filter-bar">
        <select
          value={selectedLab}
          onChange={(e) => setSelectedLab(e.target.value)}
        >
          <option value="">Pilih Laboratorium</option>
          <option value="PTI">PTI</option>
          <option value="SBTI">SBTI</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Hari</th>
            <th>Jam</th>
            <th>Mata Kuliah</th>
            <th>Ruangan</th>
            <th>Jumlah Peserta</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.hari}</td>
              <td>{item.jam}</td>
              <td>{item.matkul}</td>
              <td>{item.ruangan}</td>
              <td>{item.peserta}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default JadwalLaboratorium;
