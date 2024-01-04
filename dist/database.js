"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
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
exports.default = config;
