const express = require('express')
const { getAdopted, Adopted, deleteAdopted, AdoptedPetByUser } = require('../controllers/adoptedControllers')
const { userById } = require('../controllers/authControllers')
const router = express.Router()

router.get('/adopted', getAdopted)
router.post('/createAdopted/:userId', Adopted)
router.delete('/delete/:id', deleteAdopted)

router.param('userId', userById)
module.exports = router
 