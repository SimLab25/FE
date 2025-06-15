import React, { useState } from "react";
import "./DaftarAsisten.css";

const matkulList = [
  "Sistem Basis Data",
  "Jaringan Komputer",
  "Rekayasa Perangkat Lunak",
  "Keamanan Siber",
  "Sistem Operasi",
  "Visualisasi Data",
  "Desain & Sistem Informasi",
  "Arsitektur Enterprise",
  "Keamanan Sistem Informasi",
  "Penambangan Data",
];

const DaftarAsisten = () => {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [khsFile, setKhsFile] = useState(null);
  const [selectedMatkul, setSelectedMatkul] = useState([]);

  const handleCheckboxChange = (matkul) => {
    if (selectedMatkul.includes(matkul)) {
      setSelectedMatkul(selectedMatkul.filter((m) => m !== matkul));
    } else {
      setSelectedMatkul([...selectedMatkul, matkul]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !nim || !angkatan || !khsFile || selectedMatkul.length === 0) {
      alert("Semua field wajib diisi dan minimal satu matkul harus dipilih.");
      return;
    }

    // Simulasi pengiriman
    console.log("Data Pendaftaran:");
    console.log("Nama:", nama);
    console.log("NIM:", nim);
    console.log("Angkatan:", angkatan);
    console.log("KHS:", khsFile.name);
    console.log("Matkul Dipilih:", selectedMatkul);

    alert("Pendaftaran berhasil dikirim!");
    // Reset form
    setNama("");
    setNim("");
    setAngkatan("");
    setKhsFile(null);
    setSelectedMatkul([]);
  };

  return (
    <div className="daftar-asisten-container">
      <h2>Daftar Asisten Praktikum</h2>
      <form onSubmit={handleSubmit} className="asisten-form">
        <label>
          Nama:
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </label>

        <label>
          NIM:
          <input
            type="text"
            value={nim}
            onChange={(e) => setNim(e.target.value)}
          />
        </label>

        <label>
          Angkatan:
          <input
            type="text"
            value={angkatan}
            onChange={(e) => setAngkatan(e.target.value)}
          />
        </label>

        <label>
          Upload KHS:
          <input
            type="file"
            accept=".pdf,.jpg,.png"
            onChange={(e) => setKhsFile(e.target.files[0])}
          />
        </label>
        {khsFile && <p className="file-name">File: {khsFile.name}</p>}

        <div className="matkul-section">
          <p>Pilih Mata Kuliah:</p>
          {matkulList.map((matkul, index) => (
            <label key={index} className="checkbox-item">
              <input
                type="checkbox"
                checked={selectedMatkul.includes(matkul)}
                onChange={() => handleCheckboxChange(matkul)}
              />
              <span>{matkul}</span>
            </label>
          ))}
        </div>

        <button type="submit" className="submit-btn">
          Kirim Pendaftaran
        </button>
      </form>
    </div>
  );
};

export default DaftarAsisten;
