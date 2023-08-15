const express = require('express');
const router = express.Router();
const controller = require('../controller/index')




router.get('/',controller.home);

router.post('/sign-up', controller.create);

router.get('/sign-in', controller.signIn);

router.post('/sign-in', controller.signIn);

router.get('/forget-password',controller.forgetPassowrd);

router.post('/forget-password',controller.forgetPassowrd);

module.exports = router