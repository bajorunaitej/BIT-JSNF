const multer = require('multer');
const path = require('path');

//Failų įvesties konfiguracija
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/images');
    },
    filename: function(req, file, cb) {
        const extension = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + Date.now() + extension);
    },
});

const upload = multer({storage});

module.exports = upload;