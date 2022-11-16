import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  CreateDateColumn,
} from "typeorm";

@Entity({ name: "PurchaseReturn" })
export class PurchaseReturn {
  @PrimaryGeneratedColumn()
  PurchaseReturnID!: number;

  @Column({ type: "int" })
  PurchaseID!: number;

  @Column({ type: "int" })
  SupplierID!: number;

  @CreateDateColumn({
    default: () => "CURRENT_TIMESTAMP",
    type: "datetime",
    name: "created_at",
  })
  PurchaseReturnDate!: Date;

  @Column({ type: "float" })
  ReturnTotalAmount!: number;

  @Column({ type: "varchar", length: 150 })
  Invoice!: string;
}
