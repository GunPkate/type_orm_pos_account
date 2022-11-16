import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";

@Entity({ name: "SaleReturn" })
export class SaleReturn {
  @PrimaryGeneratedColumn()
  SaleReturnID!: number;

  @Column({ type: "int" })
  SaleID!: number;

  @Column({ type: "int" })
  CustomerID!: number;

  @Column({})
  SaleReturnDate!: Date;

  @Column({ type: "float" })
  ReturnTotalAmount!: number;

  @Column({ type: "varchar", length: 150 })
  Invoice!: string;
}
