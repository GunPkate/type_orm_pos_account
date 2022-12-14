import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  OneToOne,
  JoinColumn,
  JoinTable,
} from "typeorm";
import { Product } from "./Product";

@Entity({ name: "SaleReturnDetail" })
export class SaleReturnDetail {
  @PrimaryGeneratedColumn()
  SaleDetailID!: number;

  @Column({ type: "int" })
  SaleReturnID!: number;

  @ManyToMany(() => Product, (product: Product) => product.ProductID)
  @JoinTable()
  ProductID!: Product[];

  @Column({ type: "int" })
  ReturnQty!: number;

  @Column({ type: "float" })
  ReturnUnitPrice!: number;

  @Column({ type: "varchar", length: 50 })
  ReturnReason!: string;
}
