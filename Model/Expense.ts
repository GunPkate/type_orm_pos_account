import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { ExpenseDetail } from "./ExpenseDetail";

@Entity({ name: "Expense" })
export class Expense {
  @PrimaryGeneratedColumn()
  ExpenseID!: number;

  @OneToMany(
    () => ExpenseDetail,
    (expenseDetail: ExpenseDetail) => expenseDetail.ExpenseID,
    { cascade: true }
  )
  expenseDetail!: Array<ExpenseDetail>;

  @Column({ type: "varchar", length: 150 })
  InvoiceNo!: string;

  @Column({ type: "varchar", length: 150 })
  ExpenseTitle!: string;

  @Column({ type: "varchar", length: 300 })
  ExpenseReason!: string;

  @Column({ type: "float" })
  TotalAmount!: number;
}
