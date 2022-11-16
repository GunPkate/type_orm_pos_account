import { AccountControl } from "./AccountControl";
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
import { Customer } from "./Customer";
import { SaleDetail } from "./SaleDetail";
import { SaleReturn } from "./SaleReturn";

@Entity({ name: "Sale" })
export class Sale {
  @PrimaryGeneratedColumn()
  SaleID!: number;

  @Column({ type: "int" })
  CustomerID!: number;

  @OneToMany(
    () => SaleDetail,
    (saleDetail: SaleDetail) => saleDetail.SaleDetailID,
    { cascade: true }
  )
  saleDetail!: Array<SaleDetail>;

  @OneToMany(
    () => SaleReturn,
    (saleReturn: SaleReturn) => saleReturn.SaleReturnID,
    { cascade: true }
  )
  saleReturn!: Array<SaleReturn>;

  @ManyToOne(() => Customer, (customer: Customer) => customer.CustomerID, {
    cascade: true,
  })
  @JoinColumn({ name: "CustomerID" })
  customerID!: Customer;

  @Column({ type: "int" })
  ProductID!: number;

  @Column({ type: "varchar", length: 150 })
  InvoiceNo!: string;

  @CreateDateColumn({
    default: () => "CURRENT_TIMESTAMP",
    type: "datetime",
    name: "created_at",
  })
  SaleDate!: Date;

  @Column({ type: "float" })
  TotalAmount!: number;
}
