import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
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

  @ManyToMany(() => Product,(product:Product)=>product.ProductID)
  @JoinTable()
  ProductID!: Product[];

  @Column({ type: "float" })
  SaleUnitPrice!: number;

  @Column({ type: "int" })
  SaleQty!: number;
}
