import { Customer } from "./Customer";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { SaleReturnDetail } from "./SaleReturnDetail";

@Entity({ name: "SaleReturn" })
export class SaleReturn {
  @PrimaryGeneratedColumn()
  SaleReturnID!: number;

  @Column({ type: "int" })
  SaleID!: number;

  @OneToMany(
    () => SaleReturnDetail,
    (SaleReturnDetail: SaleReturnDetail) => SaleReturnDetail.SaleReturnID
  )
  @JoinColumn({ name: "SaleReturnDetailID" })
  SaleReturnDetailID!: Array<SaleReturnDetail>;;

  @ManyToOne(() => Customer, (customer: Customer) => customer.CustomerID)
  @JoinColumn({ name: "CustomerID" })
  CustomerID!: Customer;

  @CreateDateColumn({
    default: () => "CURRENT_TIMESTAMP",
    type: "datetime",
    name: "created_at",
  })
  SaleReturnDate!: Date;

  @Column({ type: "float" })
  ReturnTotalAmount!: number;

  @Column({ type: "varchar", length: 150 })
  Invoice!: string;
}
