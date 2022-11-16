import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Purchase } from "./Purchase";

@Entity({ name: "PurchaseDetail" })
export class PurchaseDetail {
  @PrimaryGeneratedColumn()
  PurchaseDetailID!: number;

  @Column({ type: "int" })
  PurchaseID!: number;

  @ManyToOne(() => Purchase, (purchase: Purchase) => purchase.PurchaseID, {
    cascade: true,
  })
  @JoinColumn({ name: "PurchaseID" })
  purchase!: Purchase;

  @Column({ type: "int" })
  ProductID!: number;

  @Column({ type: "int" })
  PurchaseQty!: number;

  @Column({ type: "float" })
  PurchaseUnitPrice!: number;
}
