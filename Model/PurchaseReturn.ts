import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";

@Entity({ name: "PurchaseReturn" })
export class PurchaseReturn {
  @PrimaryGeneratedColumn()
  PurchaseReturnID!: number;

  @Column({ type: "int" })
  PurchaseID!: number;

  @Column({ type: "int" })
  SupplierID!: number;

  @Column({})
  PurchaseReturnDate!: Date;

  @Column({ type: "float" })
  ReturnTotalAmount!: number;

  @Column({ type: "varchar", length: 150 })
  Invoice!: string;
}
