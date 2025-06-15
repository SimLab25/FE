import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./DaftarPraktikum.css";

const dataPraktikum = [
  {
    matkul: "Praktikum Basis Data",
    kelas: "A",
    semester: "IV",
    hari: "Senin",
    waktu: "08:00 - 10:00",
    ruangan: "PTI",
    dosen: "Farid Suryanto, M.T.",
    kuota: "45/50",
    status: "Tersedia",
  },
  {
    matkul: "Praktikum Basis Data",
    kelas: "B",
    semester: "IV",
    hari: "Senin",
    waktu: "10:00 - 12:00",
    ruangan: "SBTI",
    dosen: "Farid Suryanto, M.T.",
    kuota: "50/50",
    status: "Penuh",
  },
  {
    matkul: "Praktikum Jaringan Komputer",
    kelas: "A",
    semester: "IV",
    hari: "Jumat",
    waktu: "08:00 - 10:00",
    ruangan: "PTI",
    dosen: "Iwan Tri Riyadi Yanto, Ph.D",
    kuota: "50/50",
    status: "Penuh",
  },
  {
    matkul: "Praktikum Keamanan Siber",
    kelas: "A",
    semester: "VI",
    hari: "Selasa",
    waktu: "13:00 - 15:00",
    ruangan: "SBTI",
    dosen: "Djoko Imam Pamungkas",
    kuota: "20/50",
    status: "Tersedia",
  },
  {
    matkul: "Praktikum Rekayasa Perangkat Lunak",
    kelas: "B",
    semester: "VI",
    hari: "Kamis",
    waktu: "10:00 - 12:00",
    ruangan: "PTI",
    dosen: "Sri Handayaningsih, MT.",
    kuota: "50/50",
    status: "Penuh",
  },
];

const DaftarPraktikum = () => {
  const navigate = useNavigate();
  const [selectedSemester, setSelectedSemester] = useState("");

  const semesterList = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

  const filteredData = selectedSemester
    ? dataPraktikum.filter((item) => item.semester === selectedSemester)
    : dataPraktikum;

  return (
    <main className="praktikum-container">
      <div className="header-praktikum">
        <button className="back-btn" onClick={() => navigate("/dashboard-mhs")}>
          <FaArrowLeft />
        </button>
        <h2>Daftar Praktikum</h2>
      </div>

      <div className="filter-bar">
        <select
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
        >
          <option value="">Pilih Semester</option>
          {semesterList.map((smt) => (
            <option key={smt} value={smt}>
              Semester {smt}
            </option>
          ))}
        </select>
      </div>

      {filteredData.length === 0 ? (
        <div className="no-data-card">
          <p>Tidak ada kelas praktikum yang ditawarkan</p>
        </div>
      ) : (
        <table className="praktikum-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Mata Kuliah</th>
              <th>Kelas</th>
              <th>Semester</th>
              <th>Hari</th>
              <th>Waktu</th>
              <th>Ruangan</th>
              <th>Dosen</th>
              <th>Kuota</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.matkul}</td>
                <td>{item.kelas}</td>
                <td>{item.semester}</td>
                <td>{item.hari}</td>
                <td>{item.waktu}</td>
                <td>{item.ruangan}</td>
                <td>{item.dosen}</td>
                <td>{item.kuota}</td>
                <td>
                  <span
                    className={`status-badge ${
                      item.status === "Tersedia" ? "available" : "full"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td>
                  {item.status === "Tersedia" ? (
                    <button className="btn-daftar">Daftar</button>
                  ) : (
                    <button className="btn-penuh" disabled>
                      Penuh
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
};

export default DaftarPraktikum;
