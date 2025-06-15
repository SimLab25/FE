import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./HalamanAbsensi.css";

const HalamanAbsensi = () => {
  const { matkul, kelas } = useParams();
  const navigate = useNavigate();
  const [tanggal, setTanggal] = useState("");

  const daftarMahasiswa = [
    { nama: "Agung Prasetyo", nim: "2117051001" },
    { nama: "Lina Fadila", nim: "2117051005" },
    { nama: "Danu Wibowo", nim: "2117051010" },
  ];

  const handleSimpan = () => {
    if (!tanggal) {
      alert("Harap pilih tanggal terlebih dahulu.");
      return;
    }

    alert("Absensi berhasil disimpan.");
    navigate("/asisten-praktikum"); // navigasi balik
  };

  return (
    <div className="halaman-absen">
      <h2>Absensi Mahasiswa Praktikum</h2>
      <p>
        <strong>Tanggal Praktikum:</strong>
        <input
          type="date"
          value={tanggal}
          onChange={(e) => setTanggal(e.target.value)}
        />
      </p>
      <p>
        <strong>Mata Kuliah:</strong> {decodeURIComponent(matkul)}
      </p>
      <p>
        <strong>Kelas:</strong> {decodeURIComponent(kelas)}
      </p>

      <div className="list-absen">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>NIM</th>
              <th>Nama</th>
              <th>Hadir</th>
            </tr>
          </thead>
          <tbody>
            {daftarMahasiswa.map((mhs, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{mhs.nim}</td>
                <td>{mhs.nama}</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn-absen" onClick={handleSimpan}>
        Simpan Absensi
      </button>
    </div>
  );
};

export default HalamanAbsensi;
