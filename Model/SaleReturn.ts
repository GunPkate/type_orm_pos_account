import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { SaleReturnDetail } from "./SaleReturnDetail";

@Entity({ name: "SaleReturn" })
export class SaleReturn {
  @PrimaryGeneratedColumn()
  SaleReturnID!: number;

  @Column({ type: "int" })
  SaleID!: number;

  @OneToOne(() => SaleReturnDetail)
  @JoinColumn({ name: "SaleReturnDetailID" })
  SaleReturnDetailID!: SaleReturnDetail;

  @Column({ type: "int" })
  CustomerID!: number;

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
