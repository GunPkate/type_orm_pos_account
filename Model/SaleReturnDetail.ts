import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";

@Entity({ name: "SaleReturnDetail" })
export class SaleReturnDetail {
  @PrimaryGeneratedColumn()
  SaleDetailID!: number;

  @Column({ type: "int" })
  SaleReturnID!: number;

  @Column({ type: "int" })
  ProductID!: number;

  @Column({ type: "int" })
  ReturnQty!: number;

  @Column({ type: "float" })
  ReturnUnitPrice!: number;

  @Column({ type: "varchar", length: 50 })
  ReturnReason!: string;
}
