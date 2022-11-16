import { createConnection, DataSource } from "typeorm";

export const local_dataSource = async (): Promise<DataSource> => {
  const connect: DataSource = await createConnection({
    type: "mssql",
    host: "localhost",
    database: "POS_ACCOUNT",
    extra: {
      driver: "msnodesqlv8",
      options: {
        trustedConnection: true,
      },
    },
  });
  if (connect) {
    console.log("SQL Server connected");
  }
  return connect;
};

