import { Request, Response, NextFunction } from 'express';

export default function FlashMessagesProvider(req: Request, res: Response, next: NextFunction) {
    res.locals.success_message = req.flash('success_message');
    res.locals.error_message = req.flash('error_message');
    return next();
}
