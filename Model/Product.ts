import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";

@Entity({ name: "Product" })
export class Product {
  @PrimaryGeneratedColumn()
  ProductID!: number;

  //
  @Column({ type: "int" })
  CategoryID!: number;

  @Column({ type: "varchar", length: 150 })
  Name!: string;

  @Column({ type: "date" })
  MffcDate!: Date;

  @Column({ type: "date" })
  ExpDate!: Date;

  @Column({ type: "int" })
  Quantity!: number;

  @Column({ type: "float" })
  PurchaseUnitprice!: number;

  @Column({ type: "float" })
  SaleUnitprice!: number;

  @Column({ type: "varchar", length: 300 })
  Description!: number;
}
