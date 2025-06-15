// components/AsistenPraktikum.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPen, FaClipboardList } from "react-icons/fa";
import "./AsistenPraktikum.css";

const data = [
  { matkul: "Sistem Basis Data", kelas: "A", asisten: ["Agung", "Lina"] },
  { matkul: "Keamanan Siber", kelas: "B", asisten: ["Danu", "Rina", "Budi"] },
  { matkul: "Visualisasi Data", kelas: "A", asisten: ["Joko", "Putri"] },
];

const AsistenPraktikum = () => {
  const navigate = useNavigate();

  const handleAbsen = (matkul, kelas) => {
    navigate(
      `/absensi/${encodeURIComponent(matkul)}/${encodeURIComponent(kelas)}`
    );
  };

  const handleRekap = (matkul, kelas) => {
    navigate(
      `/rekap/${encodeURIComponent(matkul)}/${encodeURIComponent(kelas)}`
    );
  };

  return (
    <div className="asisten-page">
      <h2>Daftar Asisten Praktikum</h2>
      <table className="asisten-table">
        <thead>
          <tr>
            <th>Mata Kuliah</th>
            <th>Kelas</th>
            <th>Asisten</th>
            <th>Absensi</th>
            <th>Rekap Absensi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx}>
              <td>{item.matkul}</td>
              <td>{item.kelas}</td>
              <td>{item.asisten.join(", ")}</td>
              <td>
                <button onClick={() => handleAbsen(item.matkul, item.kelas)}>
                  <FaPen />
                </button>
              </td>
              <td>
                <button onClick={() => handleRekap(item.matkul, item.kelas)}>
                  <FaClipboardList />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AsistenPraktikum;
