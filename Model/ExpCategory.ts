import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "ExpCategory" })
export class ExpCategory {
  @PrimaryGeneratedColumn()
  ExpCategoryID!: number;

  @Column({ type: "varchar", length: 150 })
  ExpCategoryName!: string;
}
