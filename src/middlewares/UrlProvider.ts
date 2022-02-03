import { Request, Response, NextFunction } from 'express';


export default function UrlProvider(req: Request, res: Response, next: NextFunction) {
    let urlSegmentsArr = req.originalUrl.replace(/^\/|\/$/g, '').split('/');
    res.locals.segment = urlSegmentsArr;
    res.locals.url = (segment: string) => {
        return `${req.protocol}://${req.get('host')}/${segment}`;
    }
    return next();
}
