import { AccountControl } from "./AccountControl";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";

@Entity({ name: "Supplier" })
export class Supplier {
  @PrimaryGeneratedColumn()
  SupplierID!: number;

  @Column({ type: "varchar", length: 150 })
  SupplierName!: string;

  @Column({ type: "varchar", length: 150 })
  Email!: string;

  @Column({ type: "varchar", length: 20 })
  ContactNo!: string;

  @Column({ type: "varchar", length: 300 })
  Address!: string;

}
