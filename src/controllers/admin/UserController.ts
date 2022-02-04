import { Request, Response } from 'express';
import { User } from './../../models/UserModel';
import bcrypt from 'bcrypt';

interface BaseDataObject {
    title: string;
}

class UserController {

    constructor() {
        console.log('Admin User Controller Constructor');
    }

    dashboard(req: Request, res: Response) {
        let data: BaseDataObject;
        data.title = 'Admin Dashboard';
        return res.render('admin/users/dashboard', data);
    }

    index(req: Request, res: Response) {
        let data: Partial<BaseDataObject> = {};
        data.title = 'Manage Users';
        return res.render('admin/users/index', data);
    }

    login(req: Request, res: Response) {
        try {
            if (req.method == 'POST') {
                let { email, password } = req.body;
                req.session.auth = { email, password };
                req.flash('success_message', 'Welcome Onboard');
                return res.redirect(301, '/admin/dashboard');
            }
            return res.render('admin/users/login');
        } catch (error) {
            console.log('We are in catch block.', error);
        }
    }
}

export default new UserController();