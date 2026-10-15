// Mini Project - Pertemuan 9-10: Model Mahasiswa
const mongoose = require("mongoose");

const alamatSchema = new mongoose.Schema(
  {
    jalan: String,
    kota: String,
  },
  { _id: false }
);

const mahasiswaSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: [true, "Nama mahasiswa wajib diisi"],
  },
  nim: {
    type: String,
    required: [true, "NIM mahasiswa wajib diisi"],
    unique: true,
  },
  alamat: alamatSchema,

  // Referencing ke model 'Prodi'
  prodiId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Prodi",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Mahasiswa", mahasiswaSchema);