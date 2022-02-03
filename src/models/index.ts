import * as sequelize from "sequelize";
import { UserModel, UserFactory } from './UserModel';
import { SkillsFactory } from "./SkillModel";


export const dbConfig = new sequelize.Sequelize(
    (process.env.DB_NAME = "db-name"),
    (process.env.DB_USER = "db-user"),
    (process.env.DB_PASSWORD = "db-password"),
    {
        port: Number(process.env.DB_PORT) || 54320,
        host: process.env.DB_HOST || "localhost",
        dialect: "postgres",
        pool: {
            min: 0,
            max: 5,
            acquire: 30000,
            idle: 10000,
        },
    }
);

// SOMETHING VERY IMPORTANT them Factory functions expect a
// sequelize instance as parameter give them `dbConfig`

export const User = UserFactory(dbConfig);
export const Skill = SkillsFactory(dbConfig);

// Users have skills then lets create that relationship

User.hasMany(Skill);

// or instead of that, maybe many users have many skills
Skill.belongsToMany(User, { through: "users_have_skills" });

// the skill is the limit!