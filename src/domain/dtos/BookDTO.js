class BookDTO {
    constructor({ id, title, authorId }) {
      this.id = id;
      this.title = title;
      this.authorId = authorId;
    }
  
    static fromRequest(req) {
      const { id, title, authorId } = req.body;
  
      if (!title || typeof title !== "string") {
        throw new Error("El campo 'title' es obligatorio y debe ser un string.");
      }
  
      if (!authorId || typeof authorId !== "number") {
        throw new Error("El campo 'authorId' es obligatorio y debe ser un número.");
      }
  
      return new BookDTO({ id, title, authorId });
    }
  }
  
  module.exports = BookDTO;
  