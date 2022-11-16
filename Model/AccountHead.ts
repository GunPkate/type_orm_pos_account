import { AccountControl } from "./AccountControl";
import { Transaction } from "./Transaction";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity({ name: "AccountHead" })
export class AccountHead {
  @PrimaryGeneratedColumn()
  HeadID!: number;

  @Column({ type: "varchar", length: 150 })
  HeaderTitle!: string;

  @OneToMany(
    () => AccountControl,
    (accountControl: AccountControl) => accountControl.HeadControlID,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  accountControl!: Array<AccountControl>;
  // @OneToMany(
  //   () => Transaction,
  //   (transaction: Transaction) => transaction.HeadID,
  //   {
  //     onDelete: "CASCADE",
  //     onUpdate: "CASCADE",
  //   }
  // )
  // transaction!: Array<Transaction>;

}
