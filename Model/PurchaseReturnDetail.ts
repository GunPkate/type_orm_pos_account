import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";

@Entity({ name: "PurchaseReturnDetail" })
export class PurchaseReturnDetail {
  @PrimaryGeneratedColumn()
  PurchaseDetailID!: number;

  @Column({ type: "int" })
  PurchaseReturnID!: number;

  @Column({ type: "int" })
  ProductID!: number;

  @Column({ type: "int" })
  ReturnQty!: number;

  @Column({ type: "float" })
  ReturnUnitPrice!: number;

  @Column({ type: "varchar", length: 50 })
  ReturnReason!: string;
}
