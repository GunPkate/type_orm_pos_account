import { Supplier } from "./Supplier";
import { AccountControl } from "./AccountControl";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

@Entity({ name: "Purchase" })
export class Purchase {
  @PrimaryGeneratedColumn()
  PurchaseID!: number;

  @ManyToOne(() => Supplier, (supplier: Supplier) => supplier.SupplierID, {
    cascade: true,
  })
  @JoinColumn({ name: "SupplierID" })
  SupplierID!: Supplier;

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
