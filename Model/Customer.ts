import { AccountControl } from "./AccountControl";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";

@Entity({ name: "Customer" })
export class Customer {
  @PrimaryGeneratedColumn()
  CustomerID!: number;

  @Column({ type: "varchar", length: 150 })
  CustomerName!: string;

  @Column({ type: "varchar", length: 150 })
  Email!: string;

  @Column({ type: "varchar", length: 20 })
  ContactNo!: string;

  @Column({ type: "varchar", length: 300 })
  Address!: string;

}
