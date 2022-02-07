import { Request, Response } from 'express';
import UserRepository from '../../repositories/UserRepository';

interface BaseDataObject {
    title: string;
}

class UserController {

    constructor() {
        console.log('Admin User Controller Constructor');
    }

    dashboard(req: Request, res: Response) {
        let data: Partial<BaseDataObject> = {};
        data.title = 'Admin Dashboard';
        return res.render('admin/users/dashboard', data);
    }

    async index(req: Request, res: Response) {
        let data: Partial<BaseDataObject> = {};
        data.title = 'Manage Users';
        return res.render('admin/users/index', data);
    }

    async login(req: Request, res: Response) {
        try {
            if (req.method == 'POST') {
                let { email, password } = req.body;
                let result = await UserRepository.checkUserLogin(email, password);
                if (result !== false) {
                    req.session.auth = result;
                    req.flash('success_message', 'Welcome Onboard');
                    return res.redirect(301, '/admin/dashboard');
                }
                req.flash('error_message', 'Incorrect Login Credentials');
                return res.redirect('/admin/login');
            }
            return res.render('admin/users/login');
        } catch (error) {
            console.log('We are in catch block.', error);
        }
    }
}

export default new UserController();