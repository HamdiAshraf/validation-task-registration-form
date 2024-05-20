const { Router } = require('express')

const {registerController,checkFormValidation}=require('../controllers/registerController')

const router = Router()

router.get('/', (req, res, next) => {
    res.render('index')
})

router.get('/register', (req, res, next) => {
    res.render('register')
})


router.post('/register', checkFormValidation,registerController )


module.exports = router