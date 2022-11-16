import { AccountControl } from "./AccountControl";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AccountHead } from "./AccountHead";
import { FinancialYear } from "./FinancialYear";

@Entity({ name: "Transaction" })
export class Transaction {
  @PrimaryGeneratedColumn()
  TransactionID!: number;

  @Column({ type: "int" })
  HeadID!: number;

  @ManyToOne(
    () => AccountHead,
    (accountHead: AccountHead) => accountHead.HeadID,
    { cascade: true }
  )
  @JoinColumn({ name: "HeadID" })
  accountHead!: AccountHead;

  @Column({ type: "int" })
  HeadControlID!: number;

  @ManyToOne(
    () => AccountControl,
    (accountControl: AccountControl) => accountControl.HeadControlID,
    { cascade: true }
  )
  @JoinColumn({ name: "HeadControlID" })
  accountControl!: AccountControl;

  // @OneToOne(() => FinancialYear)
  // @JoinColumn({ name: "FinancialYearID" })
  // FinancialYearID!: FinancialYear;

  @Column({ type: "int" })
  FinancialYearID!: number;

  @ManyToOne(
    () => FinancialYear,
    (financialYear: FinancialYear) => financialYear.FinancialYearID,
    { cascade: true }
  )
  @JoinColumn({ name: "FinancialYearID" })
  financialYear!: FinancialYear;

  @Column({ type: "varchar", length: 300 })
  TransactionTitle!: string;

  @Column({ type: "varchar", length: 150 })
  InvoiceNo!: string;

  @Column({ type: "float" })
  Debit!: number;

  @Column({ type: "float" })
  Credit!: number;

  @CreateDateColumn({
    default: () => "CURRENT_TIMESTAMP",
    type: "datetime",
    name: "created_at",
  })
  TransactionDate!: Date;
}
