import { AccountControl } from "./AccountControl";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";

@Entity({ name: "ExpenseDetail" })
export class ExpenseDetail {
  @PrimaryGeneratedColumn()
  ExpenseDetailID!: number;

  @Column({ type: "int" })
  ExpenseID!: number;

  @Column({ type: "int" })
  ExpCategoryID!: number;

  @Column({ type: "varchar", length: 300 })
  ItemName!: string;

  @Column({ type: "float" })
  ItemCost!: number;
}
