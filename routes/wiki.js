const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const addPage = require('../views/addPage.js');

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get('/', (req, res, next) => {
    res.send('test wiki')
})

router.post('/', (req, res, next) => {
    res.send('test wiki')
})

router.get('/add', (req, res, next) => {
    res.send(addPage())
})

module.exports = router;