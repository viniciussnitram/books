const { Router } = require('express');

const BookController = require('./app/controllers/BookController');
const AuthorController = require('./app/controllers/AuthorController');

const router = Router();

router.get('/books', BookController.index);

router.get('/authors', AuthorController.index);

module.exports = router;
