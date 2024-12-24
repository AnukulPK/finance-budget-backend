import express from "express";
import expenseRoutes from "../routes/expense.routes";
import sequelize from "../config/database";

const app = express();
const PORT = process.env.PORT ?? 4001;

// Tets the database connection
const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

// Call the database for connection
connectToDatabase();

//Middleware to parse incoming JSON requests
app.use(express.json());

//Register the expense route under the "/api" path
app.use("/api", expenseRoutes);

// Root route for health check
app.get("/", (req, res) => {
  res.send("Expense service is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Expense service is listening on ${PORT}`);
});
