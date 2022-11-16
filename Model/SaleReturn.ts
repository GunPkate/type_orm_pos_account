import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  CreateDateColumn,
} from "typeorm";

@Entity({ name: "SaleReturn" })
export class SaleReturn {
  @PrimaryGeneratedColumn()
  SaleReturnID!: number;

  @Column({ type: "int" })
  SaleID!: number;

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
