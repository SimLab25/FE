// components/RekapAbsensi.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./RekapAbsensi.css";
import { FaEdit } from "react-icons/fa";

const dummyData = {
  tanggal: [
    "10 Maret 2025",
    "17 Maret 2025",
    "24 Maret 2025",
    "31 Maret 2025",
    "7 April 2025",
    "14 April 2025",
    "21 April 2025",
    "28 April 2025",
    "5 Mei 2025",
    "12 Mei 2025",
  ],
  detail: {
    1: [
      { nim: "2117051001", nama: "Agung Prasetyo", hadir: true },
      { nim: "2117051005", nama: "Lina Fadila", hadir: false },
      { nim: "2117051010", nama: "Danu Wibowo", hadir: true },
    ],
    // Tambahkan data detail per pertemuan jika perlu
  },
};

const RekapAbsensi = () => {
  const { matkul, kelas } = useParams();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(null);
  const [detailData, setDetailData] = useState(dummyData.detail);

  const toggleExpand = (pertemuan) => {
    setExpanded((prev) => (prev === pertemuan ? null : pertemuan));
  };

  const toggleHadir = (pertemuan, index) => {
    setDetailData((prev) => {
      const updated = [...prev[pertemuan]];
      updated[index] = {
        ...updated[index],
        hadir: !updated[index].hadir,
      };
      return { ...prev, [pertemuan]: updated };
    });
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
          {dummyData.tanggal.map((tanggal, idx) => (
            <React.Fragment key={idx}>
              <tr>
                <td>{idx + 1}</td>
                <td>{tanggal}</td>
                <td>
                  <button onClick={() => toggleExpand(idx + 1)}>
                    {expanded === idx + 1 ? "Sembunyikan" : "Lihat Data"}
                  </button>
                </td>
              </tr>
              {expanded === idx + 1 && detailData[expanded] && (
                <tr className="detail-row">
                  <td colSpan="3">
                    <div className="detail-container">
                      <p className="detail-title">
                        Detail Mahasiswa – Pertemuan {expanded}
                      </p>
                      <table className="detail-table">
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>NIM</th>
                            <th>Nama</th>
                            <th>Hadir</th>
                            <th>Aksi</th>
                          </tr>
                        </thead>
                        <tbody>
                          {detailData[expanded].map((mhs, i) => (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{mhs.nim}</td>
                              <td>{mhs.nama}</td>
                              <td>
                                {mhs.hadir ? (
                                  <span className="check">✔</span>
                                ) : (
                                  <span className="cross">✘</span>
                                )}
                              </td>
                              <td>
                                <button
                                  className="edit-button"
                                  onClick={() => toggleHadir(expanded, i)}
                                >
                                  <FaEdit />
                                </button>
                              </td>
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
        className="back-button"
        onClick={() => navigate("/asisten-praktikum")}
      >
        Kembali ke Asisten Praktikum
      </button>
    </div>
  );
};

export default RekapAbsensi;
