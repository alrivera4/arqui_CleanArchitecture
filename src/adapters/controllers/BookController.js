class BookController {
    constructor(createBookUseCase) {
      this.createBookUseCase = createBookUseCase;
    }
  
    async create(req, res) {
      try {
        const book = await this.createBookUseCase.execute(req.body);
        res.status(201).json(book);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  }
  
  module.exports = BookController;
  