import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { Product } from "./Product";
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

  @OneToOne(() => Product)
  @JoinColumn({ name: "ProductID" })
  ProductID!: Product;

  @Column({ type: "int" })
  PurchaseQty!: number;

  @Column({ type: "float" })
  PurchaseUnitPrice!: number;
}
