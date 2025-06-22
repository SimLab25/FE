import React, { useState } from "react";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./DaftarPraktikum.css";

const dataPraktikum = [
  {
    matkul: "Praktikum Basis Data",
    semester: "IV",
    hari: "Senin",
    waktu: "08:00 - 10:00",
    ruangan: "PTI",
    dosen: "Farid Suryanto, M.T.",
  },
  {
    matkul: "Praktikum Jaringan Komputer",
    semester: "IV",
    hari: "Jumat",
    waktu: "08:00 - 10:00",
    ruangan: "PTI",
    dosen: "Iwan Tri Riyadi Yanto, Ph.D",
  },
  {
    matkul: "Praktikum Keamanan Siber",
    semester: "VI",
    hari: "Selasa",
    waktu: "13:00 - 15:00",
    ruangan: "SBTI",
    dosen: "Djoko Imam Pamungkas",
  },
  {
    matkul: "Praktikum Rekayasa Perangkat Lunak",
    semester: "VI",
    hari: "Kamis",
    waktu: "10:00 - 12:00",
    ruangan: "PTI",
    dosen: "Sri Handayaningsih, MT.",
  },
  {
    matkul: "Praktikum Desain UI/UX",
    semester: "V",
    hari: "Rabu",
    waktu: "13:00 - 15:00",
    ruangan: "Lab Multimedia",
    dosen: "Rina Wahyuni, M.Kom",
  },
];

const DaftarPraktikum = () => {
  const navigate = useNavigate();
  const [selectedSemester, setSelectedSemester] = useState("");
  const [showDetail, setShowDetail] = useState(null);

  const semesterList = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

  const filteredData = selectedSemester
    ? dataPraktikum.filter((item) => item.semester === selectedSemester)
    : dataPraktikum;

  return (
    <main className="praktikum-container">
      <div className="header-praktikum">
        <button className="back-btn" onClick={() => navigate("/dashboard-mhs")}>
          {" "}
          <FaArrowLeft />{" "}
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
              <th>Semester</th>
              <th>Hari</th>
              <th>Waktu</th>
              <th>Ruangan</th>
              <th>Dosen</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.matkul}</td>
                  <td>{item.semester}</td>
                  <td>{item.hari}</td>
                  <td>{item.waktu}</td>
                  <td>{item.ruangan}</td>
                  <td>{item.dosen}</td>
                  <td>
                    <button
                      className="btn-aksi"
                      onClick={() =>
                        setShowDetail(showDetail === index ? null : index)
                      }
                    >
                      <FaPlus />
                    </button>
                  </td>
                </tr>
                {showDetail === index && (
                  <tr className="detail-row">
                    <td colSpan="8">
                      <div className="detail-content">
                        <h4>{item.matkul}</h4>
                        <p>
                          <strong>Ruangan:</strong> {item.ruangan}
                        </p>
                        <p>
                          <strong>Dosen:</strong> {item.dosen}
                        </p>
                        <p>
                          <strong>Hari:</strong> {item.hari},{" "}
                          <strong>Waktu:</strong> {item.waktu}
                        </p>
                        <button className="submit-btn">Simpan Praktikum</button>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
};

export default DaftarPraktikum;
