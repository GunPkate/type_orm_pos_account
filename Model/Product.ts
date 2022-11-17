import { Category } from "./Category";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
} from "typeorm";
import { SaleReturnDetail } from "./SaleReturnDetail";
import { SaleDetail } from "./SaleDetail";
import { PurchaseDetail } from "./PurchaseDetail";
import { PurchaseReturnDetail } from "./PurchaseReturnDetail";

@Entity({ name: "Product" })
export class Product {
  @PrimaryGeneratedColumn()
  ProductID!: number;

  @ManyToOne(() => Category, (category: Category) => category.CategoryID)
  @JoinColumn({ name: "CategoryID" })
  CategoryID!: Category;

  @ManyToMany(
    () => PurchaseDetail,
    (PurchaseDetail: PurchaseDetail) => PurchaseDetail.PurchaseDetailID
  )
  @ManyToMany(
    () => PurchaseReturnDetail,
    (PurchaseReturnDetail: PurchaseReturnDetail) =>
      PurchaseReturnDetail.PurchaseReturnID
  )
  @ManyToMany(
    () => SaleDetail,
    (saleDetail: SaleDetail) => saleDetail.ProductID
  )
  @ManyToMany(
    () => SaleReturnDetail,
    (saleReturnDetail: SaleReturnDetail) => saleReturnDetail.ProductID
  )
  @Column({ type: "varchar", length: 150 })
  Name!: string;

  @CreateDateColumn({
    default: () => "CURRENT_TIMESTAMP",
    type: "datetime",
    name: "created_at",
  })
  MffcDate!: Date;

  @Column({ type: "date" })
  ExpDate!: Date;

  @Column({ type: "int" })
  Quantity!: number;

  @Column({ type: "float" })
  PurchaseUnitprice!: number;

  @Column({ type: "float" })
  SaleUnitprice!: number;

  @Column({ type: "varchar", length: 300 })
  Description!: number;
}
