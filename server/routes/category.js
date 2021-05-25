const express = require('express')
const router = express.Router()
const { create, list, remove, categoryById } = require('../controllers/categoryControllers')

// M V C -- Model view Controller

router.get('/categories', list)
router.post('/create', create)


router.delete('/:categoryId', remove)

router.param('categoryId', categoryById)

module.exports = router
