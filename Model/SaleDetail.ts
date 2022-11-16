import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";

@Entity({ name: "SaleDetail" })
export class SaleDetail {
  @PrimaryGeneratedColumn()
  SaleDetailID!: number;

  @Column({ type: "int" })
  SaleID!: number;

  @Column({ type: "int" })
  ProductID!: number;

  @Column({ type: "float" })
  SaleUnitPrice!: number;

  @Column({ type: "int" })
  SaleQty!: number;
}
