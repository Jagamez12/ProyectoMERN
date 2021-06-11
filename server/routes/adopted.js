const express = require('express')
const { getAdopted, Adopted, deleteAdopted } = require('../controllers/adoptedControllers')
const { userById } = require('../controllers/authControllers')
const router = express.Router()

router.get('/adopted', getAdopted)
router.post('/createAdopted/:userId', Adopted)
router.delete('/delete', deleteAdopted)

router.param('userId', userById)
module.exports = router
 