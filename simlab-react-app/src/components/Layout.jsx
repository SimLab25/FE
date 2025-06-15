import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBook, FaSignOutAlt, FaAngleDown } from "react-icons/fa";
import "./Layout.css";

const Layout = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const toggleSubMenu = (submenu) => {
    setOpenSubMenu(openSubMenu === submenu ? null : submenu);
  };

  const handleLogout = () => {
    if (window.confirm("Apakah Anda yakin ingin keluar?")) {
      navigate("/");
    }
  };

  return (
    <div className="dashboard-wrapper">
      <aside className="sidebar open">
        <div className="logo-section">
          <div className="logo-circle"></div>
          <h2 className="logo-text">
            SIM
            <br />
            LAB
          </h2>
        </div>

        <nav>
          <div className="menu-section">
            {/* Beranda (menu paling atas tanpa submenu) */}
            <p className="menu-title">
              <Link
                to="/dashboard"
                style={{ color: "white", textDecoration: "none" }}
              >
                <FaBook /> Beranda
              </Link>
            </p>

            {/* Laboratorium */}
            <p className="menu-title" onClick={() => toggleMenu("lab")}>
              <span>
                <FaBook /> Laboratorium
              </span>
              <FaAngleDown className="icon-right" />
            </p>
            {openMenu === "lab" && (
              <ul>
                <li>
                  <Link to="/jadwal-laboratorium">Jadwal Laboratorium</Link>
                </li>
                <li>
                  <Link to="/daftar-alat">Daftar Alat</Link>
                </li>
              </ul>
            )}

            {/* Praktikum */}
            <p className="menu-title" onClick={() => toggleMenu("praktikum")}>
              <span>
                <FaBook /> Praktikum
              </span>
              <FaAngleDown className="icon-right" />
            </p>
            {openMenu === "praktikum" && (
              <ul>
                <li>
                  <Link to="/jadwal-prak-si">Jadwal Praktikum Saya</Link>
                </li>

                <li
                  className="submenu-toggle"
                  onClick={() => toggleSubMenu("pendaftaran")}
                >
                  Pendaftaran <FaAngleDown className="icon-right" />
                </li>
                {openSubMenu === "pendaftaran" && (
                  <ul className="submenu">
                    <li>
                      <Link to="/daftar-praktikum">Daftar Praktikum</Link>
                    </li>
                    <li>
                      <Link to="/daftar-asisten">Daftar Asisten</Link>
                    </li>
                    <li>
                      <Link to="/daftar-inhall">Daftar Inhall</Link>
                    </li>
                  </ul>
                )}

                <li>
                  <Link to="/asisten-praktikum">Asisten Praktikum</Link>
                </li>

                <li>
                  <Link to="/pembayaran-praktikum">Pembayaran</Link>
                </li>
              </ul>
            )}

            {/* Riwayat */}
            <p className="menu-title" onClick={() => toggleMenu("riwayat")}>
              <span>
                <FaBook /> Riwayat
              </span>
              <FaAngleDown className="icon-right" />
            </p>
            {openMenu === "riwayat" && (
              <ul>
                <li>
                  <Link to="/riwayat-praktikum">Praktikum</Link>
                </li>
                <li>
                  <Link to="/riwayat-peminjaman">Pinjam Alat</Link>
                </li>
              </ul>
            )}
          </div>
        </nav>

        <div className="bottom-menu fixed-bottom">
          <p onClick={handleLogout}>
            <FaSignOutAlt /> Keluar
          </p>
        </div>
      </aside>

      <main className="main-area">{children}</main>
    </div>
  );
};

export default Layout;
