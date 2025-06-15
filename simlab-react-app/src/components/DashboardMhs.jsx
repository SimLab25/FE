// DashboardMhs.jsx
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./DashboardMhs.css";

const DashboardMhs = () => {
  return (
    <div className="dashboard-mhs">
      <div className="main-content">
        <section className="praktikum-section">
          <h3>Kelas Praktikum Saya</h3>
          <div className="card-scroll">
            <div className="kelas-card">
              <h4>
                Visualisasi Informasi
                <br /> Preparing Dataset
              </h4>
              <p>Rabu, 10.00 - 12.00</p>
              <p>
                <FaMapMarkerAlt /> PSI
              </p>
              <button className="kelas-btn">Lihat kelas →</button>
            </div>
            <div className="kelas-card">
              <h4>Visualisasi Informasi D</h4>
              <p>Rabu, 10.00 - 12.00</p>
              <p>
                <FaMapMarkerAlt /> PSI
              </p>
              <button className="kelas-btn">Lihat kelas →</button>
            </div>
            <div className="kelas-card">
              <h4>
                RDUX
                <br /> Auto Layout di Figma
              </h4>
              <p>10.00 - 12.10 am</p>
              <p>
                <FaMapMarkerAlt /> PSI
              </p>
              <button className="kelas-btn">Lihat kelas →</button>
            </div>
          </div>
        </section>

        <section className="informasi-section">
          <h3>Informasi Akademik</h3>
          <div className="info-box">
            <strong>Pendaftaran praktikum susulan sudah dibuka</strong>
            <p>
              Pendaftaran kegiatan praktikum semester ini telah dibuka hingga 15
              Mei 2025.
            </p>
          </div>
          <div className="info-box">
            <strong>Pendaftaran Inhall (Ujian Susulan Praktikum)</strong>
            <p>
              Pendaftaran inhall praktikum tersedia hingga 12 Mei 2025 bagi
              mahasiswa yang memenuhi syarat ketidakhadiran resmi.
            </p>
          </div>
          <div className="info-box">
            <strong>Pendaftaran Asisten Praktikum</strong>
            <p>
              Rekrutmen asisten praktikum telah dibuka – silakan ajukan lamaran
              melalui laman resmi laboratorium sebelum 17 Mei 2025.
            </p>
          </div>
          <div className="info-box">
            <strong>Informasi Responsi</strong>
            <p>
              Responsi praktikum akan dilaksanakan mulai 20 Mei 2025, sesuai
              jadwal di sistem masing-masing.
            </p>
          </div>
        </section>
      </div>

      <aside className="jadwal-area">
        <div className="jadwal-card">
          <h3 className="jadwal-title-left">Jadwal Hari Ini</h3>
          <ul className="jadwal-list">
            <li>
              <strong>Arsitektur Enterprise</strong>
              <br /> Jumat, 16.00 - 17.50
              <br /> <FaMapMarkerAlt /> PSI
            </li>
            <li>
              <strong>RDUX</strong>
              <br /> Rabu, 10.00 - 12.00
              <br /> <FaMapMarkerAlt /> PSI
            </li>
            <li>
              <strong>Visualisasi Informasi</strong>
              <br /> Selasa, 8.45 - 10.00
              <br /> <FaMapMarkerAlt /> SBTI
            </li>
            <li>
              <strong>Business Intelligence</strong>
              <br /> Senin, 12.00 - 14.00
              <br /> <FaMapMarkerAlt /> PSI
            </li>
            <li>
              <strong>Data Mining</strong>
              <br /> Kamis, 16.00 - 17.50
              <br /> <FaMapMarkerAlt /> PSI
            </li>
            <li>
              <strong>Sistem Basis Data</strong>
              <br /> Senin, 16.00 - 17.50
              <br /> <FaMapMarkerAlt /> PSI
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default DashboardMhs;
