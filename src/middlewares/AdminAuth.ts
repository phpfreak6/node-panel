import { Request, Response, NextFunction } from 'express';

export default function AdminAuth(req: Request, res: Response, next: NextFunction) {
    console.log('Admin Auth Middleware');
    if (req.session && ('auth' in req.session)) {
        return next();
    }
    req.flash('error_message', 'Please Login First');
    return res.redirect(301, '/admin/login');
};
