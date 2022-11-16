import { Product } from "./Product";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity({ name: "Category" })
export class Category {
  @PrimaryGeneratedColumn()
  CategoryID!: number;

  @Column({ type: "varchar", length: 150 })
  CategoryName!: string;

  @OneToMany(() => Product, (product: Product) => product.CategoryID)
  product!: Array<Product>;
}
