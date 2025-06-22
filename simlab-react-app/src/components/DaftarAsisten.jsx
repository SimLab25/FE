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
    if (!khsFile || selectedMatkul.length === 0) {
      alert("Upload KHS dan pilih minimal satu mata kuliah.");
      return;
    }

    console.log("KHS:", khsFile.name);
    console.log("Matkul Dipilih:", selectedMatkul);

    alert("Pendaftaran berhasil dikirim!");
    setKhsFile(null);
    setSelectedMatkul([]);
  };

  return (
    <div className="daftar-asisten-container">
      <h2>Daftar Asisten Praktikum</h2>
      <form onSubmit={handleSubmit} className="asisten-form">
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
