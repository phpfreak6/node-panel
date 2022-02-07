import { Sequelize } from "sequelize";

const db: string = 'blowout_express';
const username: string = 'root';
const password: string = '';

export const sequelize = new Sequelize(db, username, password, {
    dialect: "mysql",
    port: 3306,
});

sequelize.authenticate();