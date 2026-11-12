// Mini Project - Pertemuan 11-12: Controller Mahasiswa
// TODO 1: lengkapi getAll agar mendukung filtering, sorting, pagination, dan projection.
// getById/create/update/remove sudah lengkap (dari Pertemuan 9-10).

const Mahasiswa = require("../models/mahasiswaModel");

const MAX_LIMIT = 100;

// GET /mahasiswa?prodiId=...&sort=nama&page=1&limit=10&fields=nama,nim
exports.getAll = async (req, res) => {
  // TODO: bangun object filter - jika req.query.prodiId ada, tambahkan ke filter
  const filter = {};
  if (req.params.prodiId){
    filter.prodiId = req.params.prodiId;
  }

  const data = await Mahasiswa.find (filter);

  // TODO: ambil page dari req.query.page (default 1, minimal 1)
  // TODO: ambil limit dari req.query.limit (default 10), batasi maksimum dengan MAX_LIMIT
  // TODO: ambil sortField dari req.query.sort (default 'createdAt')
  // TODO: ambil projection dari req.query.fields (ubah "nama,nim" menjadi "nama nim")

  // TODO: panggil Mahasiswa.find(filter).populate('prodiId').select(projection)
  //   .sort({ [sortField]: 1 }).skip((page - 1) * limit).limit(limit)
  // TODO: hitung total dengan Mahasiswa.countDocuments(filter)
  // TODO: kirim res.json({ data, page, limit, total })
};

exports.getById = async (req, res) => {
  const data = await Mahasiswa.findById(req.params.id).populate("prodiId");
  if (!data) throw { status: 404, message: "Tidak ditemukan" };
  res.json(data);
};

exports.create = async (req, res) => {
  const mahasiswa = await Mahasiswa.create(req.body);
  res.status(201).json(mahasiswa);
};

exports.update = async (req, res) => {
  const data = await Mahasiswa.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!data) throw { status: 404, message: "Tidak ditemukan" };
  res.json(data);
};

exports.remove = async (req, res) => {
  const data = await Mahasiswa.findByIdAndDelete(req.params.id);
  if (!data) throw { status: 404, message: "Tidak ditemukan" };
  res.status(204).send();
};
