const Pengguna = require('../models/pengguna');

const getPengguna = async (req, res) => {
  try {
    const users = await Pengguna.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const addPengguna = async (req, res) => {
  try {
    const { name, email, address, telp } = req.body;

    if (!name || !email || !address || !telp) {
      return res.status(400).json({ message: "Semua field wajib diisi!" });
    }

    const existingUser = await Pengguna.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email sudah digunakan!" });
    }

    const user = await Pengguna.create({ name, email, address, telp });
    res.status(201).json({ message: "Pengguna berhasil ditambahkan!", pengguna });
  } catch (error) {
    res.status(500).json({ message: "Gagal menambahkan pengguna", error: error.message });
  }
};

const getPenggunaById = async (req, res) => {
  try {
    const user = await Pengguna.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "Pengguna tidak ditemukan" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const updatePengguna = async (req, res) => {
  try {
    const { name, email, address, telp } = req.body;
    const user = await Pengguna.findByIdAndUpdate(
      req.params.id,
      { name, email, address, telp },
      { new: true }
    );
    if (!user) return res.status(404).json({ message: "Pengguna tidak ditemukan" });
    res.json({ message: "Pengguna berhasil diupdate", user });
  } catch (error) {
    res.status(500).json({ message: "Gagal update pengguna", error: error.message });
  }
};

const deletePengguna = async (req, res) => {
  try {
    const user = await Pengguna.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "Pengguna tidak ditemukan" });
    res.json({ message: "Pengguna berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: "Gagal menghapus pengguna", error: error.message });
  }
};

module.exports = { getPengguna, addPengguna, getPenggunaById, updatePengguna, deletePengguna };
