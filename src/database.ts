import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "myuser",
  password: "mypassword",
  database: "mydatabase",
  entities: ["dist/entities/*.js"],
  synchronize: true,
  logging: true,
};

export default config;
