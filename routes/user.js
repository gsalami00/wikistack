const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get('/', (req, res, next) => {
    res.send('test wiki')
})

router.get('/:id', (req, res, next) => {
    res.send(req.params.id)
})

router.post('/', (req, res, next) => {
    res.send('post')
})

router.put('/:id', (req, res, next) => {
    res.send('req.params.id')
})

router.delete('/:id', (req, res, next) => {
    res.send('delete')
})


module.exports = router;
