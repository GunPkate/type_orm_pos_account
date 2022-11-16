import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Product } from "./Product";
import { Sale } from "./Sale";

@Entity({ name: "SaleDetail" })
export class SaleDetail {
  @PrimaryGeneratedColumn()
  SaleDetailID!: number;

  @ManyToOne(() => Sale, (Sale: Sale) => Sale.SaleID, {
    cascade: true,
  })
  @JoinColumn({ name: "SaleID" })
  Sale!: Sale;

  @OneToOne(() => Product)
  @JoinColumn({ name: "ProductID" })
  ProductID!: Product;

  @Column({ type: "float" })
  SaleUnitPrice!: number;

  @Column({ type: "int" })
  SaleQty!: number;
}
