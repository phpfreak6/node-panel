/* Import Libraries */
import express, { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import session from 'express-session';
import sqlite from 'better-sqlite3';
import crypto from 'crypto';
import flash from 'connect-flash';
import nocache from 'nocache';

/* Import Files */
import config from './config/app';
import view from './config/view';
import routes from './routes/index';

// Middlewares
import FlashMessagesProvider from './middlewares/FlashMessagesProvider';

/* Initialize Express */
const app = express();

app.use(nocache());

app.set('trust proxy', 1)

/* Set Views Options */
app.set('views', path.join(__dirname, view.directory));
app.engine(view.engine, require('express-ejs-extend'));
app.set('view engine', view.engine);
app.set('view cache', view.cache);

/* Set Logger Options */
// app.use(logger('dev'));
/* Set Logger Options */

/* Set Session Options */
const SqliteStore = require("better-sqlite3-session-store")(session);
const db = new sqlite("sessions.db",
    // { verbose: console.log }
);
app.use(session({
    store: new SqliteStore({
        client: db,
        expired: {
            clear: true,
            intervalMs: 900000
        }
    }),
    secret: ['veryimportantsecret', 'notsoimportantsecret', 'highlyprobablysecret'],
    resave: false,
    rolling: true,
    saveUninitialized: false,
    name: "portal_session_id",
    genid: () => crypto.randomBytes(16).toString("hex"),
    cookie: { httpOnly: true, sameSite: true, maxAge: 600000 }
}));

/* Set Session Options */
app.use(cookieParser());

app.use(flash());// Initialize Flash Messages
app.use(FlashMessagesProvider); // Bind Flash Messages

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));

app.use(cors());
app.use("/", routes);

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
    next(createError(404));
});

// error handler
app.use(function (err: any, req: any, res: any, next: any) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

export default app;
