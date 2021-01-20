// initialize express routes
const router = require('express').Router();

// import controllers
const mahasiswaController = require('../controller/mahasiswaController');

// set default API routes
router.get('/', (req, res) => {
    res.json({
        status: 'API Bekerja',
        message: 'Selamat Datang di Rest API Gemss Code'
    });
});

// mahasiswa controller
router.route('/mahasiswa')
    .get(mahasiswaController.index)
    .post(mahasiswaController.new);

router.route('/mahasiswa/:mahasiswa_id')
    .get(mahasiswaController.view)
    .patch(mahasiswaController.update)
    .put(mahasiswaController.update)
    .delete(mahasiswaController.delete);

// export API routes
module.exports = router;