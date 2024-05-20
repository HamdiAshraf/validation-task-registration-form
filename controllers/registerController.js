
const { check, validationResult, body } = require('express-validator')

exports.checkFormValidation=[
    check('fullname').isString().withMessage('fullname must be only string')
    ,

    body('email')
        .isEmail().withMessage('Must be a valid email address')
        .custom((value) => {

            if (!value.endsWith('@gmail.com')) {
                throw new Error('Email must end with @gmail.com');
            }
            return true;
        })
        .normalizeEmail(),


    body('password')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
        .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
        .matches(/[!@#$%^&*]/).withMessage('Password must contain at least one of the following special characters: !@#$%^&*')
    ,
    body('confirmpassword')
        .custom((value, { req }) => {

            if (value !== req.body.password) {
                throw new Error('Password confirmation must match the password');
            }

            return true;
        }),

    body('birthdate')
        .isISO8601().withMessage('Must be a valid date in the format YYYY-MM-DD')


]


exports.registerController=(req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    } else {
        res.status(200).json({ message: 'SUCCESS' });
    }




}