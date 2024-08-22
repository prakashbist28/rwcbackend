const express = require('express');
const { getAllComics, getComicById } = require('../controllers/comicController');

const router = express.Router();

router.get('/comics', getAllComics);
router.get('/comics/:id', getComicById);

module.exports = router;
