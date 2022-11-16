import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ExpenseDetail } from "./ExpenseDetail";

@Entity({ name: "ExpCategory" })
export class ExpCategory {
  @PrimaryGeneratedColumn()
  ExpCategoryID!: number;

  @OneToMany(
    () => ExpenseDetail,
    (expenseDetail: ExpenseDetail) => expenseDetail.ExpCategoryID,
    { cascade: true }
  )
  expenseDetail!: Array<ExpenseDetail>;

  @Column({ type: "varchar", length: 150 })
  ExpCategoryName!: string;
}
