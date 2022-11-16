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

@Entity({ name: "SaleDetail" })
export class SaleDetail {
  @PrimaryGeneratedColumn()
  SaleDetailID!: number;

  @Column({ type: "int" })
  SaleID!: number;

  @OneToOne(() => Product)
  @JoinColumn({ name: "ProductID" })
  ProductID!: Product;

  @Column({ type: "float" })
  SaleUnitPrice!: number;

  @Column({ type: "int" })
  SaleQty!: number;
}
