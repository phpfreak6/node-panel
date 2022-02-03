/* Import Libraries */
import express from 'express';


const router = express.Router({ mergeParams: true });

router.get('/tyagi', function (req, res, next) {
    console.log('We are in api tyagi route.');
});

export default router;