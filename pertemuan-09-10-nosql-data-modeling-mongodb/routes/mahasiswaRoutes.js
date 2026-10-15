// Mini Project - Pertemuan 9-10: Route Mahasiswa
const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/mahasiswaController");

// HTTP GET / - Ambil semua data mahasiswa
router.get("/", mahasiswaController.getAll);

// HTTP GET /:id - Ambil 1 data mahasiswa berdasarkan ID
router.get("/:id", mahasiswaController.getById);

// HTTP POST / - Tambah data mahasiswa baru
router.post("/", mahasiswaController.create);

// HTTP PUT /:id - Update data mahasiswa berdasarkan ID
router.put("/:id", mahasiswaController.update);

// HTTP DELETE /:id - Hapus data mahasiswa berdasarkan ID
router.delete("/:id", mahasiswaController.remove);

module.exports = router;