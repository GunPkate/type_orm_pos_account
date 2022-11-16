import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { Sale } from "./Sale";
import { SaleReturn } from "./SaleReturn";

@Entity({ name: "Customer" })
export class Customer {
  @PrimaryGeneratedColumn()
  CustomerID!: number;

  @OneToMany(() => Sale, (Sale: Sale) => Sale.CustomerID, {
    onUpdate: "CASCADE",
  })
  Sale!: Array<Sale>;

  @OneToMany(
    () => SaleReturn,
    (SaleReturn: SaleReturn) => SaleReturn.CustomerID,
    {
      onUpdate: "CASCADE",
    }
  )
  SaleReturn!: Array<SaleReturn>;

  @Column({ type: "varchar", length: 150 })
  CustomerName!: string;

  @Column({ type: "varchar", length: 150 })
  Email!: string;

  @Column({ type: "varchar", length: 20 })
  ContactNo!: string;

  @Column({ type: "varchar", length: 300 })
  Address!: string;
}
