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
    required: [true, "Nama wajib diisi"],
  },
  nim: {
    type: String,
    required: [true, "NIM wajib diisi"],
    unique: true,
  },
  alamat: alamatSchema,
  prodiId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Prodi",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Mahasiswa", mahasiswaSchema);