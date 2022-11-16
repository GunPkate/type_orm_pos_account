import { AccountControl } from "./AccountControl";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { SharedProp } from "./sharedProp";

@Entity({ name: "FinancialYear" })
export class FinancialYear extends SharedProp {
  @PrimaryGeneratedColumn()
  FinancialYearID!: number;

  @Column({ type: "varchar", length: 250 })
  FinancialYear!: string;

  @Column({ type: "bit" })
  Status!: number;
}
