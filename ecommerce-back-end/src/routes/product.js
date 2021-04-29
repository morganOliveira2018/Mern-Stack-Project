const express = require('express');
const { requireSignin, adminMiddleware } = require('../common-middleware/index');
const { createProduct } = require('../controller/product');
const multer = require('multer');
const router = express.Router();
const shortid = require('shortid');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), 'uploads'))
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + '-' + file.originalname)
  }
})

const upload = multer({ storage });

router.post('/product/create', requireSignin, adminMiddleware, upload.array('productPicture'), createProduct);
//res.status(200).json({ message: 'Olá novo produto'})

module.exports = router;

// https://www.youtube.com/watch?v=fP_wPIgNK7s&t=971s - 26:20