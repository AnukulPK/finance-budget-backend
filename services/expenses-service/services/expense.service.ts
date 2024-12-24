import Expense from "../models/expense.model";

class ExpenseService {
  // Method to create an expense
  public async createExpense(description: string, amount: number) {
    try {
      // Create a new expense entry in the database
      const expense = await Expense.create({ description, amount });
      return expense; // Return the created expense
    } catch (error) {
      throw new Error("Error creating expense");
    }
  }

  // Method to get all expenses
  public async getAllExpenses() {
    try {
      // Fetch all expenses from the database
      const expenses = await Expense.findAll();
      return expenses; // Return the list of expenses
    } catch (error) {
      throw new Error("Error fetching expenses");
    }
  }
}

export default new ExpenseService();
