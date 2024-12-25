


const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(require("cors")());

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
const userRoutes = require("./routes/userRoutes");
const articleRoutes = require("./routes/articleRoutes");

app.use("/api/users", userRoutes);
app.use("/api/articles", articleRoutes);