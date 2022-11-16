import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AccountHead } from "./AccountHead";

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

  @Column({ type: "int" })
  FiscalID!: number;

  @Column({ type: "varchar", length: 300 })
  TransactionTitle!: string;

  @Column({ type: "varchar", length: 150 })
  InvoiceNo!: string;

  @Column({ type: "float" })
  Debit!: number;

  @Column({ type: "float" })
  Credit!: number;

  @Column({ type: "date" })
  TransactionDate!: Date;
}
