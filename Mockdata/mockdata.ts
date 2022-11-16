import { faker } from "@faker-js/faker";
import { connectionString, sql } from "../server";

const table:string = "expense";
const query:string = `select * from ${table}`;
const data = sql.query(connectionString, query, (err, result) => {
  console.log(result);
  if (result != undefined && result.length == 0) {
    for (let i = 0; i < 100; i++) {
      const x = faker.finance.transactionType();
      console.log(i,x);
    }
  }
});

const insert_value = [

]
// const insert_query:string = `Insert into ${table} values(${insert_value[0]},)`;
// const insert = sql.query(connectionString, insert_query, (err, result) => {
//   console.log(result);
// });
