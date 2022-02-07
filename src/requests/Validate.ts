import { Request, Response, NextFunction } from 'express';
import { body, Result, ValidationError, validationResult } from 'express-validator';

export function validate(schemas: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
        await Promise.all(
            schemas.map(
                (schema: any) => {
                    return schema.run(req);
                })
        );
        const result = validationResult(req);
        if (result.isEmpty()) {
            return next();
        }
        req.flash('error_message', result.array()[0].msg);
        let previousUrl: string = req.get('referer');
        return res.redirect(301, previousUrl);
    };
}