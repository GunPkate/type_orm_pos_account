import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Purchase } from "./Purchase";

@Entity({ name: "Supplier" })
export class Supplier {
  @PrimaryGeneratedColumn()
  SupplierID!: number;

  @OneToMany(() => Purchase, (purchase: Purchase) => purchase.SupplierID, {
    cascade: true,
  })
  purchase!: Array<Purchase>;

  @Column({ type: "varchar", length: 150 })
  SupplierName!: string;

  @Column({ type: "varchar", length: 150 })
  Email!: string;

  @Column({ type: "varchar", length: 20 })
  ContactNo!: string;

  @Column({ type: "varchar", length: 300 })
  Address!: string;
}
