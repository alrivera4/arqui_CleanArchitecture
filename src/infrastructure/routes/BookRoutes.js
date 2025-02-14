const express = require("express");
const router = express.Router();
const BookRepository = require("../../domain/repositories/BookRepository");
const CreateBookUseCase = require("../../usecases/book/CreateBookUseCase");
const BookController = require("../../adapters/controllers/BookController");

const bookRepository = new BookRepository();
const createBookUseCase = new CreateBookUseCase(bookRepository);
const bookController = new BookController(createBookUseCase);

router.post("/", (req, res) => bookController.create(req, res));

module.exports = router;
