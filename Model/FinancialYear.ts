import { Transaction } from "./Transaction";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity({ name: "FinancialYear" })
export class FinancialYear {
  @PrimaryGeneratedColumn()
  FinancialYearID!: number;
  @OneToMany(
    () => Transaction,
    (transaction: Transaction) => transaction.FinancialYearID
  )
  transaction!: Array<Transaction>;

  @Column({ type: "varchar", length: 250 })
  FinancialYear!: string;

  @Column({ type: "bit" })
  Status!: number;
}
