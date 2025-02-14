const express = require("express");
const router = express.Router();
const AuthorRepository = require("../../domain/repositories/AuthorRepository");
const CreateAuthorUseCase = require("../../usecases/author/CreateAuthorUseCase");
const AuthorController = require("../../adapters/controllers/AuthorController");

const authorRepository = new AuthorRepository();
const createAuthorUseCase = new CreateAuthorUseCase(authorRepository);
const authorController = new AuthorController(createAuthorUseCase);

router.post("/", (req, res) => authorController.create(req, res));

module.exports = router;
