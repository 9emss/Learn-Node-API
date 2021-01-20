const mongoose = require('mongoose');

// setup Schema
const mahasiswaSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    nim: {
        type: String,
        required: true
    },
    prodi: {
        type: String,
        required: true
    },
    telepon: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

// export model
const Mahasiswa = module.exports = mongoose.model('mahasiswa', mahasiswaSchema);
module.exports.get = function (callback, limit) {
    Mahasiswa.find(callback).limit(limit);
}