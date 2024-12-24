import { Request, Response } from "express";
import ExpenseService from "../services/expense.service";

export const createExpense = async (req: Request, res: Response) => {
  try {
    const { description, amount } = req.body;
    const expense = await ExpenseService.createExpense(description, amount);
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ error: "Failed to create an expense" });
  }
};

export const getExpenses = async (req: Request, res: Response) => {
  try {
    const expenses = await ExpenseService.getAllExpenses();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: "Failed to create an expense" });
  }
};
