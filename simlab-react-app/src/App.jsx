// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Layout from "./components/Layout";

import DashboardMhs from "./components/DashboardMhs";
import DaftarAlat from "./components/DaftarAlat";
import JadwalLaboratorium from "./components/JadwalLaboratorium";
import JadwalPrakSI from "./components/JadwalPrakSI";
import KehadiranSI from "./components/KehadiranSI";
import DaftarPraktikum from "./components/DaftarPraktikum";
import DaftarAsisten from "./components/DaftarAsisten";
import DaftarInhall from "./components/DaftarInhall";
import AsistenPraktikum from "./components/AsistenPraktikum";
import RiwayatPraktikum from "./components/RiwayatPraktikum";
import RiwayatPeminjaman from "./components/RiwayatPeminjaman";
import HalamanAbsensi from "./components/HalamanAbsensi";
import RekapAbsensi from "./components/RekapAbsensi"; // ✅ Tambahan

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <DashboardMhs />
            </Layout>
          }
        />
        <Route
          path="/jadwal-prak-si"
          element={
            <Layout>
              <JadwalPrakSI />
            </Layout>
          }
        />
        <Route
          path="/kehadiran"
          element={
            <Layout>
              <KehadiranSI />
            </Layout>
          }
        />
        <Route
          path="/jadwal-laboratorium"
          element={
            <Layout>
              <JadwalLaboratorium />
            </Layout>
          }
        />
        <Route
          path="/daftar-alat"
          element={
            <Layout>
              <DaftarAlat />
            </Layout>
          }
        />
        <Route
          path="/daftar-praktikum"
          element={
            <Layout>
              <DaftarPraktikum />
            </Layout>
          }
        />
        <Route
          path="/daftar-asisten"
          element={
            <Layout>
              <DaftarAsisten />
            </Layout>
          }
        />
        <Route
          path="/daftar-inhall"
          element={
            <Layout>
              <DaftarInhall />
            </Layout>
          }
        />
        <Route
          path="/asisten-praktikum"
          element={
            <Layout>
              <AsistenPraktikum />
            </Layout>
          }
        />
        <Route
          path="/riwayat-praktikum"
          element={
            <Layout>
              <RiwayatPraktikum />
            </Layout>
          }
        />
        <Route
          path="/riwayat-peminjaman"
          element={
            <Layout>
              <RiwayatPeminjaman />
            </Layout>
          }
        />
        <Route
          path="/absensi/:matkul/:kelas"
          element={
            <Layout>
              <HalamanAbsensi />
            </Layout>
          }
        />
        <Route
          path="/rekap/:matkul/:kelas"
          element={
            <Layout>
              <RekapAbsensi />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
