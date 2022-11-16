import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { AccountHead } from "./AccountHead";

@Entity({ name: "AccountControl" })
export class AccountControl {
  @PrimaryGeneratedColumn()
  HeadControlID!: number;

  @Column()
  HeadID!: number;

  @ManyToOne(() => AccountHead, (accountHead: AccountHead) => accountHead.HeadID)
  @JoinColumn({ name: "HeadID" })
  accountHead!: AccountHead;

  @Column()
  ControlTitle!: string;
}
