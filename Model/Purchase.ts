import { PurchaseReturn } from "./PurchaseReturn";
import { PurchaseDetail } from "./PurchaseDetail";
import { Supplier } from "./Supplier";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";

@Entity({ name: "Purchase" })
export class Purchase {
  @PrimaryGeneratedColumn()
  PurchaseID!: number;

  @OneToMany(
    () => PurchaseDetail,
    (purchaseDetail: PurchaseDetail) => purchaseDetail.PurchaseDetailID,
    { cascade: true }
  )
  purchaseDetail!: Array<PurchaseDetail>;

  @OneToMany(
    () => PurchaseReturn,
    (purchaseReturn: PurchaseReturn) => purchaseReturn.PurchaseReturnID,
    { cascade: true }
  )
  purchaseReturn!: Array<PurchaseReturn>;

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
