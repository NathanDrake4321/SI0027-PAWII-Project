const Mahasiswa = require("../models/mahasiswaModel");
const mongoose = require("mongoose");

exports.getAll = async (req, res) => {
  try {
    const data = await Mahasiswa.find().populate("prodiId");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.create(req.body);
    res.status(201).json(mahasiswa); // Wajib mengembalikan status 201
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ message: "Tidak ditemukan" });
    }
    const data = await Mahasiswa.findById(req.params.id).populate("prodiId");
    if (!data) return res.status(404).json({ message: "Tidak ditemukan" });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ message: "Tidak ditemukan" });
    }
    const data = await Mahasiswa.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!data) return res.status(404).json({ message: "Tidak ditemukan" });
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ message: "Tidak ditemukan" });
    }
    const data = await Mahasiswa.findByIdAndDelete(req.params.id);
    if (!data) return res.status(404).json({ message: "Tidak ditemukan" });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};