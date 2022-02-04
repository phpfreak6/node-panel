import { Request, Response } from 'express';
import { User } from './../../models/UserModel';
import bcrypt from 'bcrypt';

class UserController {

    constructor() {
        console.log('Home Controller Constructor');
    }

    dashboard(req: Request, res: Response) {
        return res.render('admin/users/dashboard');
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