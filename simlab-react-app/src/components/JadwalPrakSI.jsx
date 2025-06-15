import React, { useState } from "react";
import { FaMapMarkerAlt, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./JadwalPrakSI.css";

const data = [
  {
    nama: "Visualisasi Informasi A",
    waktu: "Senin, 07.00 - 08.30",
    lokasi: "PSI",
    dosen: "Farid Suryanto, S.Pd., MT.",
    sks: 3,
    jumlahPertemuan: 10,
    asisten: ["Rizal Mahardika", "Muhammad Ibnu"],
    kehadiran: [
      { tanggal: "5/5/25", status: "Hadir" },
      { tanggal: "12/5/25", status: "Hadir" },
      { tanggal: "19/5/25", status: "Tidak Hadir" },
      { tanggal: "26/5/25", status: "Hadir" },
    ],
  },
  {
    nama: "Intelijen Bisnis C",
    waktu: "Senin, 10.00 - 12.00",
    lokasi: "SBTI",
    dosen: "Dr. Arif Rahman, S.Kom., M.T.",
    sks: 3,
    jumlahPertemuan: 10,
    asisten: ["Djoko Imam Pamungkas, S.Kom."],
    kehadiran: [],
  },
  {
    nama: "Kapita Selekta B",
    waktu: "Selasa, 10.00 - 12.00",
    lokasi: "PSI",
    dosen: "Suprihatin, S.Si., M.Si",
    sks: 2,
    jumlahPertemuan: 10,
    asisten: ["Suprihatin, S.Si., M.Si"],
    kehadiran: [],
  },
  {
    nama: "Penambangan Proses D",
    waktu: "Rabu, 10.00 - 12.00",
    lokasi: "PSI",
    dosen: "Iwan Tri Riyadi Yanto, S.Si .. M.I.T., Ph.D",
    sks: 3,
    jumlahPertemuan: 10,
    asisten: ["Muhammad Ibnu"],
    kehadiran: [],
  },
  {
    nama: "Desain & Pemrograman SI B",
    waktu: "Kamis, 12.30 - 14.00",
    lokasi: "SBTI",
    dosen: "Farid Suryanto, S.Pd., MT.",
    sks: 3,
    jumlahPertemuan: 10,
    asisten: ["Muhammad Ibnu"],
    kehadiran: [],
  },
  {
    nama: "Arsitektur Enterprise B",
    waktu: "Jumat, 08.40 - 10.30",
    lokasi: "PSI",
    dosen: "Sri Handayaningsih, ST.,MT.",
    sks: 3,
    jumlahPertemuan: 10,
    asisten: ["Aldi Fathurroji"],
    kehadiran: [],
  },
];

const JadwalPrakSI = () => {
  const navigate = useNavigate();
  const [selectedPrak, setSelectedPrak] = useState(null);
  const [tab, setTab] = useState("jadwal");

  return (
    <div className="jadwal-container">
      <div className="jadwal-header">
        <FaArrowLeft
          className="back-icon"
          onClick={() => navigate("/dashboard")}
        />
        <h2>Jadwal Praktikum Saya</h2>
      </div>
      <div className="jadwal-grid">
        {data.map((item, index) => (
          <div className="jadwal-card" key={index}>
            <h4>{item.nama}</h4>
            <p>{item.waktu}</p>
            <p>
              <FaMapMarkerAlt /> {item.lokasi}
            </p>
            <button
              onClick={() => {
                setSelectedPrak(item);
                setTab("jadwal");
              }}
            >
              Selengkapnya
            </button>
          </div>
        ))}
      </div>

      {selectedPrak && (
        <div className="modal-overlay" onClick={() => setSelectedPrak(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 style={{ color: "#0a3e9b" }}>{selectedPrak.nama}</h3>
            <div className="tab-buttons">
              <button
                className={tab === "jadwal" ? "inactive-tab" : "active-tab"}
                onClick={() => setTab("jadwal")}
              >
                Jadwal Praktikum
              </button>
              <button
                className={tab === "kehadiran" ? "inactive-tab" : "active-tab"}
                onClick={() => setTab("kehadiran")}
              >
                Rekap Kehadiran
              </button>
            </div>

            {tab === "jadwal" && (
              <>
                <table className="modal-table">
                  <tbody>
                    <tr>
                      <td>Hari</td>
                      <td>{selectedPrak.waktu.split(",")[0]}</td>
                    </tr>
                    <tr>
                      <td>Jam</td>
                      <td>{selectedPrak.waktu.split(",")[1].trim()}</td>
                    </tr>
                    <tr>
                      <td>Ruang</td>
                      <td>{selectedPrak.lokasi}</td>
                    </tr>
                  </tbody>
                </table>

                <h4 style={{ color: "#0a3e9b" }}>
                  Detail Praktikum {selectedPrak.nama}
                </h4>
                <p>
                  <span className="detail-label">Dosen</span>:{" "}
                  {selectedPrak.dosen}
                </p>
                <p>
                  <span className="detail-label">Jumlah Pertemuan</span>:{" "}
                  {selectedPrak.jumlahPertemuan}
                </p>
                <p>
                  <span className="detail-label">SKS</span>: {selectedPrak.sks}
                </p>
                <p>
                  <span className="detail-label">Asisten</span>:{" "}
                  {selectedPrak.asisten.join(", ")}
                </p>
              </>
            )}

            {tab === "kehadiran" && (
              <table className="modal-table">
                <thead>
                  <tr>
                    <th>Pertemuan</th>
                    <th>Tanggal</th>
                    <th>Status Kehadiran</th>
                    <th>Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from(
                    { length: selectedPrak.jumlahPertemuan },
                    (_, i) => {
                      const record = selectedPrak.kehadiran[i];
                      const status = record?.status || "Belum Ada";
                      const keterangan =
                        record?.status === "Hadir"
                          ? "Hadir"
                          : record?.status === "Tidak Hadir"
                          ? "Tanpa Keterangan"
                          : "Tanpa Keterangan";
                      const badgeClass =
                        keterangan === "Hadir" ? "green" : "blue";
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{record?.tanggal || "-"}</td>
                          <td>{status}</td>
                          <td>
                            <span className={`badge ${badgeClass}`}>
                              {keterangan}
                            </span>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default JadwalPrakSI;
