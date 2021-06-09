const express = require('express')
const { getAdopted, Adopted, deleteAdopted } = require('../controllers/adoptedControllers')
const router = express.Router()

router.get('/adopted', getAdopted)
router.post('/createAdopted', Adopted)
router.delete('/delete', deleteAdopted)


module.exports = router
