import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  ManyToOne,
  JoinColumn,
  OneToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Product } from "./Product";
import { Purchase } from "./Purchase";

@Entity({ name: "PurchaseDetail" })
export class PurchaseDetail {
  @PrimaryGeneratedColumn()
  PurchaseDetailID!: number;

  @Column({ type: "int" })
  PurchaseID!: number;

  @ManyToMany(() => Purchase, (purchase: Purchase) => purchase.PurchaseID, {
    cascade: true,
  })
  @JoinColumn({ name: "PurchaseID" })
  purchase!: Purchase;

  @ManyToMany(() => Product, (product: Product) => product.ProductID)
  @JoinTable()
  ProductID!: Product[];

  @Column({ type: "int" })
  PurchaseQty!: number;

  @Column({ type: "float" })
  PurchaseUnitPrice!: number;
}
