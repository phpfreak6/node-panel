import UserModel from "../models/UserModel";
import bcrypt from 'bcrypt';

class UserRepository {

    constructor() {
        console.log('User Repository Constructor');
    }

    async insert(data: any) {
        return await UserModel.create(data);
    }

    async checkUserLogin(email: string, password: string): Promise<any> {
        try {
            let userObj = await UserModel.findOne({ where: { email } });
            if (userObj) {
                let passwordResult = await bcrypt.compare(password, userObj.password);
                if (passwordResult) {
                    return userObj;
                }
                return false;
            }
            return false;
        } catch (ex) {
            
        }
    }
}

export default new UserRepository();