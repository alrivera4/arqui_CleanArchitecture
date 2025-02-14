class CreateAuthorUseCase {
    constructor(authorRepository) {
      this.authorRepository = authorRepository;
    }
  
    async execute(authorData) {
      return await this.authorRepository.create(authorData);
    }
  }
  
  module.exports = CreateAuthorUseCase;
  