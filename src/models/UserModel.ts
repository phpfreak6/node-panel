import { Model, DataTypes } from "sequelize";
import { sequelize } from './../config/database';

class UserModel extends Model {

    constructor() {
        super();
        console.log('User Model Constructor');
    }

    declare id: number;
    declare first_name: string;
    declare last_name: string;
    declare email: string;
    declare password: string;
    declare created_at: string | null;
    declare updated_at: string | null;
}

export default UserModel.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        last_name: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        email: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        password: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        created_at: {
            type: new DataTypes.DATE,
            allowNull: false,
        },
        updated_at: {
            type: new DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        tableName: "users",
        timestamps: false,
        sequelize
    }
);