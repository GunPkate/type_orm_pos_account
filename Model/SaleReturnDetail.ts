import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Product } from "./Product";

@Entity({ name: "SaleReturnDetail" })
export class SaleReturnDetail {
  @PrimaryGeneratedColumn()
  SaleDetailID!: number;

  @Column({ type: "int" })
  SaleReturnID!: number;

  @OneToMany(() => Product, (product: Product) => product.ProductID)
  @JoinColumn({ name: "ProductID" })
  ProductID!: Product;

  @Column({ type: "int" })
  ReturnQty!: number;

  @Column({ type: "float" })
  ReturnUnitPrice!: number;

  @Column({ type: "varchar", length: 50 })
  ReturnReason!: string;
}
