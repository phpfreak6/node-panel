import { Request, Response, NextFunction } from 'express';

export default function AdminAuth(req: Request, res: Response, next: NextFunction) {
    console.log('Admin Auth Middleware');
    if (req.session && ('auth' in req.session)) {
        return next();
    }
    return res.redirect(301, '/admin/login');
};
