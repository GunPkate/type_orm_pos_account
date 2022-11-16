import { AccountControl } from "./AccountControl";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";

@Entity({ name: "Expense" })
export class Expense {
  @PrimaryGeneratedColumn()
  ExpenseID!: number;

  @Column({ type: "varchar", length: 150 })
  InvoiceNo!: string;

  @Column({ type: "varchar", length: 150 })
  ExpenseTitle!: string;

  @Column({ type: "varchar", length: 300 })
  ExpenseReason!: string;

  @Column({ type: "float",  })
  TotalAmount!: number;
}
