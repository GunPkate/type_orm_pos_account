import { AccountControl } from "./AccountControl";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";

@Entity({ name: "Purchase" })
export class Purchase {
  @PrimaryGeneratedColumn()
  PurchaseID!: number;

  @Column({ type: "int" })
  SupplierID!: number;

  @Column({ type: "varchar", length: 150 })
  InvoiceNo!: string;

  @Column({ type: "date" })
  PurchaseDate!: Date;

  @Column({ type: "float" })
  TotalAmount!: number;
}
