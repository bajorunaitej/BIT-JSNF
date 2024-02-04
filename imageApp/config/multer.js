const multer = require('multer');
const path = require('path');

//failu ivesties konfiguracija
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images');
    },
    filename: function (req, file, cb) {
        const extension = path.extname(file.originalname);
        const lastFileName = file.fieldname + '_' + Date.now() + extension;
        module.exports.lastFileName = lastFileName;

        cb(null, lastFileName);
    },
});

const upload = multer({storage});

module.exports = {upload};