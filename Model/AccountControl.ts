import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { AccountHead } from "./AccountHead";
import { Transaction } from "./Transaction";

@Entity({ name: "AccountControl" })
export class AccountControl {
  @PrimaryGeneratedColumn()
  HeadControlID!: number;

  @Column()
  HeadID!: number;

  @ManyToOne(() => AccountHead, (accountHead: AccountHead) => accountHead.HeadID)
  @JoinColumn({ name: "HeadID" })
  accountHead!: AccountHead;

  @OneToMany(
    () => Transaction,
    (transaction: Transaction) => transaction.HeadControlID,
    { cascade: true }
  )
  transaction!: Array<Transaction>;
  @Column()
  ControlTitle!: string;
}
