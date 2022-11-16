import { AccountControl } from "./AccountControl";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { ExpCategory } from "./ExpCategory";
import { Expense } from "./Expense";

@Entity({ name: "ExpenseDetail" })
export class ExpenseDetail {
  @PrimaryGeneratedColumn()
  ExpenseDetailID!: number;

  @ManyToOne(
    () => Expense,
    (expense: Expense) => expense.ExpenseID
    // {cascade: true}
  )
  @JoinColumn({ name: "ExpenseID" })
  ExpenseID!: Expense;

  @ManyToOne(
    () => ExpCategory,
    (expCategory: ExpCategory) => expCategory.ExpCategoryID,
    { cascade: true }
  )
  @JoinColumn({ name: "ExpCategoryID" })
  expCategory!: ExpCategory;

  @Column({ type: "int" })
  ExpCategoryID!: number;

  @Column({ type: "varchar", length: 300 })
  ItemName!: string;

  @Column({ type: "float" })
  ItemCost!: number;
}
