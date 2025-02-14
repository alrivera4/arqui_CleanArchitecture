class AuthorController {
    constructor(createAuthorUseCase) {
      this.createAuthorUseCase = createAuthorUseCase;
    }
  
    async create(req, res) {
      try {
        const author = await this.createAuthorUseCase.execute(req.body);
        res.status(201).json(author);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  }
  
  module.exports = AuthorController;
  