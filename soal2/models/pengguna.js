const mongoose = require('mongoose');

const PenggunaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  telp: {
    type: String,
    required: true
  }
}, { timestamps: true }); 

module.exports = mongoose.model('Pengguna', PenggunaSchema);
