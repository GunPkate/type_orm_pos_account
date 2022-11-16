import { AccountControl } from "./AccountControl";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  CreateDateColumn,
} from "typeorm";

@Entity({ name: "Purchase" })
export class Purchase {
  @PrimaryGeneratedColumn()
  PurchaseID!: number;

  @Column({ type: "int" })
  SupplierID!: number;

  @Column({ type: "varchar", length: 150 })
  InvoiceNo!: string;

  @CreateDateColumn({
    default: () => "CURRENT_TIMESTAMP",
    type: "datetime",
    name: "purchased_at",
  })
  PurchaseDate!: Date;

  @Column({ type: "float" })
  TotalAmount!: number;
}
