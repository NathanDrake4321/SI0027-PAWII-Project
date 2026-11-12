// TODO 3: Lengkapi baris yang ditandai TODO
require('express-async-errors'); // Dipasang paling atas agar menangkap error async otomatis
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

const mahasiswaRoutes = require("./routes/mahasiswaRoutes");
const prodiRoutes = require("./routes/prodiRoutes");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());

app.use("/mahasiswa", mahasiswaRoutes);
app.use("/prodi", prodiRoutes);

// TODO: pasang errorHandler di PALING AKHIR route
app.use(errorHandler);

// Atur timeout agar koneksi tidak membeku selamanya jika gagal
mongoose
  .connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 5000 // Batas tunggu 5 detik
  })
  .then(() => {
    console.log("Terhubung ke MongoDB Atlas");
    app.listen(PORT, () => {
      console.log(`Server berjalan di http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Gagal terhubung ke MongoDB:", err.message);
    process.exit(1);
  });