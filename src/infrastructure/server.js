require("dotenv").config();
const express = require("express");
const { connectDatabase } = require("./database/Postgres");
const authorRoutes = require("./routes/AuthorRoutes");
const bookRoutes = require("./routes/BookRoutes");

const app = express();
app.use(express.json());

app.use("/authors", authorRoutes);
app.use("/books", bookRoutes);

const PORT = process.env.PORT || 3000;
connectDatabase();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
