class AuthorDTO {
    constructor({ id, name }) {
      this.id = id;
      this.name = name;
    }
  
    static fromRequest(req) {
      const { id, name } = req.body;
  
      if (!name || typeof name !== "string") {
        throw new Error("El campo 'name' es obligatorio y debe ser un string.");
      }
  
      return new AuthorDTO({ id, name });
    }
  }
  
  module.exports = AuthorDTO;
  