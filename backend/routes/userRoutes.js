const express=require('express')
const router = express.Router()
const authcontroller=require('../controllers/AuthController.js')

router.post('/create', authcontroller.createUser);
router.post('/', authcontroller.getUser);

// router.get

module.exports= router