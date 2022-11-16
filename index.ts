import express, { Application, json, Request, Response } from "express";
import { customer } from "./server";
import { local_dataSource } from "./server_orm";
const port: number = 3000;
const app: Application = express();

app.use(express.json());
// app.get("/",(req:Request,res:Response)=>{
//     res.status(200).json({
//         message: "hello"
//     })
// });
local_dataSource();
app.use(customer);
app.listen(port, "localhost", () => {
  console.log(`connected to ${port}`);
});
