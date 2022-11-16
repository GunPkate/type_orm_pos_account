import { AccountControl } from "./AccountControl";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  CreateDateColumn,
} from "typeorm";

@Entity({ name: "Sale" })
export class Sale {
  @PrimaryGeneratedColumn()
  SaleID!: number;

  @Column({ type: "int" })
  CustomerID!: number;

  @Column({ type: "int" })
  ProductID!: number;

  @Column({ type: "varchar", length: 150 })
  InvoiceNo!: string;

  @CreateDateColumn({
    default: () => "CURRENT_TIMESTAMP",
    type: "datetime",
    name: "created_at",
  })
  SaleDate!: Date;

  @Column({ type: "float" })
  TotalAmount!: number;
}
