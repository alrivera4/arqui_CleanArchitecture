const { sequelize } = require("./database/Postgres");
const AuthorRepository = require("../domain/repositories/AuthorRepository");
const BookRepository = require("../domain/repositories/BookRepository");

const CreateAuthorUseCase = require("../usecases/author/CreateAuthorUseCase");
const CreateBookUseCase = require("../usecases/book/CreateBookUseCase");

const AuthorController = require("../adapters/controllers/AuthorController");
const BookController = require("../adapters/controllers/BookController");

// 🟢 Inyección de dependencias para los Repositorios
const authorRepository = new AuthorRepository(sequelize);
const bookRepository = new BookRepository(sequelize);

// 🔵 Inyección de dependencias para los Casos de Uso
const createAuthorUseCase = new CreateAuthorUseCase(authorRepository);
const createBookUseCase = new CreateBookUseCase(bookRepository);

// 🟡 Inyección de dependencias para los Controladores
const authorController = new AuthorController(createAuthorUseCase);
const bookController = new BookController(createBookUseCase);

module.exports = {
  authorController,
  bookController,
};
