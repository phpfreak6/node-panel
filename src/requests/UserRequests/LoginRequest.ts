import { body } from "express-validator";

let rules = [
    body('email', 'Email is required').isEmail(),
    body('password').isLength({ min: 5 }).withMessage('Password is required')
];

export default rules;