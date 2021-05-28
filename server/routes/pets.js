const express = require('express')
const router = express.Router() 

const { getPets, createPets, deletePet, photo, petsById, verMas } = require('../controllers/petsControllers')

router.get('/mascotas', getPets)
router.post('/createPets', createPets)
router.delete('/deletePet/:id', deletePet)
router.get('/foto/:petsId', photo)
router.get('/:petsId', verMas)
router.param('petsId', petsById)
module.exports = router