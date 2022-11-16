import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "Category" })
export class Category {
  @PrimaryGeneratedColumn()
  CategoryID!: number;

  @Column({ type: "varchar", length: 150 })
  CategoryName!: string;
}
