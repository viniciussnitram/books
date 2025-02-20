const { Router } = require('express');

const BookController = require('./app/controllers/BookController')

const router = Router();

router.get('/books', BookController.index);

module.exports = router;
