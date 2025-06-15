// components/RekapAbsensi.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./RekapAbsensi.css";

const pertemuanList = [
  { no: 1, tanggal: "10 Maret 2025" },
  { no: 2, tanggal: "17 Maret 2025" },
  { no: 3, tanggal: "24 Maret 2025" },
  { no: 4, tanggal: "31 Maret 2025" },
  { no: 5, tanggal: "7 April 2025" },
  { no: 6, tanggal: "14 April 2025" },
  { no: 7, tanggal: "21 April 2025" },
  { no: 8, tanggal: "28 April 2025" },
  { no: 9, tanggal: "5 Mei 2025" },
  { no: 10, tanggal: "12 Mei 2025" },
];

const dummyData = [
  { nim: "2117051001", nama: "Agung Prasetyo", hadir: true },
  { nim: "2117051005", nama: "Lina Fadila", hadir: false },
  { nim: "2117051010", nama: "Danu Wibowo", hadir: true },
];

const RekapAbsensi = () => {
  const { matkul, kelas } = useParams();
  const navigate = useNavigate();
  const [visiblePertemuan, setVisiblePertemuan] = useState(null);

  const toggleDetail = (no) => {
    setVisiblePertemuan((prev) => (prev === no ? null : no));
  };

  return (
    <div className="rekap-page">
      <h2>Rekap Absensi Praktikum</h2>
      <p>
        <strong>Mata Kuliah:</strong> {decodeURIComponent(matkul)}
      </p>
      <p>
        <strong>Kelas:</strong> {kelas}
      </p>

      <table className="rekap-table">
        <thead>
          <tr>
            <th>Pertemuan</th>
            <th>Tanggal</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {pertemuanList.map((p) => (
            <React.Fragment key={p.no}>
              <tr>
                <td>{p.no}</td>
                <td>{p.tanggal}</td>
                <td>
                  <button onClick={() => toggleDetail(p.no)}>
                    {visiblePertemuan === p.no ? "Sembunyikan" : "Lihat Data"}
                  </button>
                </td>
              </tr>
              {visiblePertemuan === p.no && (
                <tr className="detail-row">
                  <td colSpan="3">
                    <div className="rekap-detail">
                      <h4>Detail Mahasiswa – Pertemuan {p.no}</h4>
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
                          {dummyData.map((mhs, i) => (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{mhs.nim}</td>
                              <td>{mhs.nama}</td>
                              <td>{mhs.hadir ? "✔️" : "❌"}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <button
        className="btn-back"
        onClick={() => navigate("/asisten-praktikum")}
      >
        Kembali ke Asisten Praktikum
      </button>
    </div>
  );
};

export default RekapAbsensi;
