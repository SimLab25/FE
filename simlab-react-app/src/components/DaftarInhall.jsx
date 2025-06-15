import React, { useState } from "react";
import "./DaftarInhall.css";

const dataInhall = [
  {
    matkul: "Praktikum Basis Data",
    dosen: "Farid Suryanto, M.T.",
    kelas: "A",
    semester: "IV",
    total: 10,
    hadir: 7,
    pertemuan: [
      { id: 3, tanggal: "18 Maret 2025" },
      { id: 6, tanggal: "8 April 2025" },
      { id: 9, tanggal: "29 April 2025" },
    ],
  },
  {
    matkul: "Praktikum Jaringan Komputer",
    dosen: "Iwan Tri Riyadi Yanto, Ph.D",
    kelas: "B",
    semester: "IV",
    total: 10,
    hadir: 6,
    pertemuan: [
      { id: 2, tanggal: "12 Maret 2025" },
      { id: 7, tanggal: "17 April 2025" },
    ],
  },
  {
    matkul: "Praktikum RPL",
    dosen: "Sri Handayaningsih, M.T.",
    kelas: "C",
    semester: "VI",
    total: 10,
    hadir: 8,
    pertemuan: [
      { id: 4, tanggal: "26 Maret 2025" },
      { id: 5, tanggal: "2 April 2025" },
    ],
  },
];

const DaftarInhall = () => {
  const [pilihan, setPilihan] = useState({});

  const toggle = (matkul, id) => {
    const key = `${matkul}-${id}`;
    setPilihan((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const totalBiaya = Object.values(pilihan).filter(Boolean).length * 15000;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (totalBiaya === 0) return alert("Pilih minimal 1 Inhall!");
    alert(
      `Pendaftaran berhasil. Total Biaya: Rp${totalBiaya.toLocaleString()}`
    );
    setPilihan({});
  };

  return (
    <div className="inhall-page">
      <h2>Daftar Inhall Praktikum</h2>
      <form onSubmit={handleSubmit}>
        <div className="inhall-grid">
          {dataInhall.map((data, idx) => (
            <div className="inhall-card" key={idx}>
              <div className="info">
                <p>
                  <strong>Mata Kuliah:</strong> {data.matkul}
                </p>
                <p>
                  <strong>Dosen:</strong> {data.dosen}
                </p>
                <p>
                  <strong>Kelas:</strong> {data.kelas}
                </p>
                <p>
                  <strong>Semester:</strong> {data.semester}
                </p>
                <p>
                  <strong>Total Pertemuan:</strong> {data.total}
                </p>
                <p>
                  <strong>Kehadiran:</strong> {data.hadir}
                </p>
                <p>
                  <strong>Tidak Hadir:</strong> {data.pertemuan.length}
                </p>
              </div>
              <div className="checkbox-list">
                {data.pertemuan.map((p) => (
                  <label key={p.id} className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={pilihan[`${data.matkul}-${p.id}`] || false}
                      onChange={() => toggle(data.matkul, p.id)}
                    />
                    Pertemuan {p.id} — {p.tanggal}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="biaya-bawah">
          <p>
            Total Biaya Inhall: <strong>Rp{totalBiaya.toLocaleString()}</strong>
          </p>
          <button type="submit" className="submit-btn">
            Kirim Pendaftaran Inhal
          </button>
        </div>
      </form>
    </div>
  );
};

export default DaftarInhall;
