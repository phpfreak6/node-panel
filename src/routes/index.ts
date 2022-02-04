/* Import Libraries */
import express, { Router } from 'express';
import csrf from 'csurf';
import config from '../config/app';

/* Import Route Files */
import web from './web';
import api from './api';

const router = Router({ mergeParams: true });

router.get('/', function (req, res) {
    return res.json('Welcome To Express');
});
router.use("/", web);
router.use("/api", api);

export default router;
