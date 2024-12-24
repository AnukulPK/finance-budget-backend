import express from "express";
import { createExpense, getExpenses } from "../controllers/expense.controller";

const router = express.Router();

router.post("/expenses", createExpense);
router.get("/expenses", getExpenses);

export default router;
