import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Expense extends Model {
  public id!: number;
  public description!: string;
  public amount!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Expense.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Expense",
    tableName: "expenses",
  }
);

export default Expense;
