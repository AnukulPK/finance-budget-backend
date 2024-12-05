import express from "express";

const app = express();
const PORT = 8000;

//Middleware to parse json
app.use(express.json());

//first route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});

//start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
