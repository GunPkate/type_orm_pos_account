import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";

@Entity({ name: "PurchaseDetail" })
export class PurchaseDetail {
  @PrimaryGeneratedColumn()
  PurchaseDetailID!: number;

  @Column({ type: "int" })
  PurchaseID!: number;

  @Column({ type: "int" })
  ProductID!: number;

  @Column({ type: "int" })
  PurchaseQty!: number;

  @Column({ type: "float" })
  PurchaseUnitPrice!: number;
}
