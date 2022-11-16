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

  @ManyToOne(
    () => PurchaseDetail,
    (PurchaseDetail: PurchaseDetail) => PurchaseDetail.PurchaseDetailID
  )
  @JoinColumn({ name: "PurchaseDetailID" })
  PurchaseDetailID!: PurchaseDetail;

  @ManyToOne(
    () => PurchaseReturnDetail,
    (PurchaseReturnDetail: PurchaseReturnDetail) =>
      PurchaseReturnDetail.PurchaseReturnID
  )
  @JoinColumn({ name: "PurchaseReturnDetailID" })
  PurchaseReturnDetailID!: PurchaseReturnDetail;

  @ManyToOne(() => SaleDetail, (saleDetail: SaleDetail) => saleDetail.ProductID)
  @JoinColumn({ name: "SaleDetailID" })
  saleDetail!: SaleReturnDetail;

  @ManyToOne(
    () => SaleReturnDetail,
    (saleReturnDetail: SaleReturnDetail) => saleReturnDetail.ProductID
  )
  @JoinColumn({ name: "SaleReturnDetailID" })
  SaleReturnDetailID!: SaleReturnDetail;

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
