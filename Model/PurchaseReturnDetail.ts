import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToMany,
} from "typeorm";
import { Product } from "./Product";

@Entity({ name: "PurchaseReturnDetail" })
export class PurchaseReturnDetail {
  @PrimaryGeneratedColumn()
  PurchaseDetailID!: number;

  @Column({ type: "int" })
  PurchaseReturnID!: number;

  @ManyToMany(() => Product, (product: Product) => product.ProductID)
  @JoinColumn({ name: "ProductID" })
  ProductID!: Product;

  @Column({ type: "int" })
  ReturnQty!: number;

  @Column({ type: "float" })
  ReturnUnitPrice!: number;

  @Column({ type: "varchar", length: 50 })
  ReturnReason!: string;
}
