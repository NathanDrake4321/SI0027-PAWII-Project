// Mini Project - Pertemuan 17-18: Komponen presentational sederhana (sudah lengkap)

import { Link } from "react-router-dom";

function PageHeader({ judul }) {
  return (
    <header className="page-header">
      <h1>{judul}</h1>
      <nav>
        <Link to="/">Mobile Suit Gundam Seed</Link>
        {" | "}
        <Link to="/tentang">About</Link>
      </nav>
    </header>
  );
}

export default PageHeader;
