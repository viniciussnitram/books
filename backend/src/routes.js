const { Router } = require('express');

const BookController = require('./app/controllers/BookController');
const AuthorController = require('./app/controllers/AuthorController');

const router = Router();

router.post('/books', BookController.store);
router.get('/books', BookController.index);
router.get('/books/:id', BookController.show);
router.put('/books/:id', BookController.update);
router.delete('/books/:id', BookController.delete);

router.post('/authors', AuthorController.store);
router.get('/authors', AuthorController.index);
router.get('/authors/:id', AuthorController.show);
router.put('/authors/:id', AuthorController.update);
router.delete('/authors/:id', AuthorController.delete);

module.exports = router;
