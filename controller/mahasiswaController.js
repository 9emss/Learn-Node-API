// import mahasiswaModel
const Mahasiswa = require('../model/mahasiswaModel');

// handle index actions
exports.index = (req, res) => {
    Mahasiswa.get((err, mahasiswa) => {
        if (err) {
            res.json({
                status: 0,
                message: err
            });
        }
        res.json({
            status: 1,
            message: "Data Mahasiswa berhasil diambil",
            data: mahasiswa
        });
    });
};

// handle create data mahasiswa
exports.new = function (req, res) {
    const mahasiswa = new Mahasiswa(req.body);
    mahasiswa.nama = req.body.nama ? req.body.nama : mahasiswa.nama;
    mahasiswa.nim = req.body.nim;
    mahasiswa.prodi = req.body.prodi;
    mahasiswa.telepon = req.body.telepon;
    mahasiswa.email = req.body.email;

    // save data mahasiswa and check error
    mahasiswa.save(function (err) {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            res.send({
                message: "Data Mahasiswa berhasil ditambahkan",
                data: mahasiswa
            });
        }
    });
};

// handle view data mahasiswa
exports.view = (req, res) => {
    Mahasiswa.findById(req.params.mahasiswa_id, (err, mahasiswa) => {
        if (err) {
            res.send(err);
        } else {
            res.json({
                message: "Loading Data Mahasiswa...",
                data: mahasiswa
            });
        }
    });
};

// handle update data mahasiswa
exports.update = (req, res) => {
    Mahasiswa.findById(req.params.mahasiswa_id, (err, mahasiswa) => {
        if (err)
            res.send(err);

        mahasiswa.nama = req.body.nama ? req.body.nama : mahasiswa.nama;
        mahasiswa.nim = req.body.nim;
        mahasiswa.prodi = req.body.prodi;
        mahasiswa.telepon = req.body.telepon;
        mahasiswa.email = req.body.email;

        // save data mahasiswa dan check update
        mahasiswa.save((err) => {
            if (err) {
                res.json(err);
            }
            res.json({
                message: "Data Mahasiswa berhasil diperbaharui",
                data: mahasiswa
            });
        });
    });
};

// handle delete data mahasiswa
exports.delete = (req, res) => {
    Mahasiswa.remove({
        _id: req.params.mahasiswa_id
    }, (err, mahasiswa) => {
        if (err) {
            res.send(err);
        } else {
            res.json({
                status: 2,
                message: "Data Mahasiswa terhapus",
            });
        }
    });
};