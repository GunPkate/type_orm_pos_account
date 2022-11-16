import { Transaction } from './Model/Transaction';
import { Supplier } from './Model/Supplier';
import { SaleReturnDetail } from './Model/SaleReturnDetail';
import { SaleReturn } from './Model/SaleReturn';
import { SaleDetail } from './Model/SaleDetail';
import { PurchaseReturnDetail } from './Model/PurchaseReturnDetail';
import { PurchaseReturn } from './Model/PurchaseReturn';
import { PurchaseDetail } from './Model/PurchaseDetail';
import { Purchase } from './Model/Purchase';
import { Product } from './Model/Product';
import { FinancialYear } from './Model/FinancialYear';
import { createConnection, DataSource } from "typeorm";
import { AccountControl } from "./Model/AccountControl";
import { AccountHead } from "./Model/AccountHead";
import { Customer } from './Model/Customer';
import { Category } from "./Model/Category";
import { Expense } from './Model/Expense';
import { ExpCategory } from './Model/ExpCategory';
import { ExpenseDetail } from './Model/ExpenseDetail';
import { Sale } from './Model/Sale';

const tables = [AccountControl,AccountHead,Category,Customer,ExpCategory,Expense,ExpenseDetail,FinancialYear,Product,Purchase,PurchaseDetail,PurchaseReturn,PurchaseReturnDetail,Sale,SaleDetail,SaleReturn,SaleReturnDetail,Supplier,Transaction]

export const local_dataSource = async (): Promise<DataSource> => {
  const connection = new DataSource({
    type: "mysql",
    host: "localhost",
    // port: 3406,
    // username: "root",
    // password: "",
    // database: "pos_account",    

    port: 3306,
    username: "root",
    password: "",
    database: "pos_account",
    synchronize: true,
    logging: true,
    entities: tables,
    subscribers: [],
    migrations: [],
  });
  connection.initialize();
  return connection;
};
