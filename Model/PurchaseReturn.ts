import { Supplier } from "./Supplier";
import { Purchase } from "./Purchase";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { PurchaseReturnDetail } from "./PurchaseReturnDetail";

@Entity({ name: "PurchaseReturn" })
export class PurchaseReturn {
  @PrimaryGeneratedColumn()
  PurchaseReturnID!: number;

  @Column({ type: "int" })
  PurchaseID!: number;

  @OneToOne(() => PurchaseReturnDetail)
  @JoinColumn({ name: "PurchaseReturnDetailID" })
  PurchaseReturnDetailID!: PurchaseReturnDetail;

  @ManyToOne(() => Purchase, (purchase: Purchase) => purchase.PurchaseID, {
    cascade: true,
  })
  @JoinColumn({ name: "PurchaseID" })
  purchase!: Purchase;

  @Column({ type: "int" })
  SupplierID!: number;

  @ManyToOne(() => Supplier, (supplier: Supplier) => supplier.SupplierID, {
    cascade: true,
  })
  @JoinColumn({ name: "SupplierID" })
  supplier!: Supplier;

  @CreateDateColumn({
    default: () => "CURRENT_TIMESTAMP",
    type: "datetime",
    name: "created_at",
  })
  PurchaseReturnDate!: Date;

  @Column({ type: "float" })
  ReturnTotalAmount!: number;

  @Column({ type: "varchar", length: 150 })
  Invoice!: string;
}
