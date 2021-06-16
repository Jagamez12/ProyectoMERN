const express = require('express')
const router = express.Router() 
const { userById } = require('../controllers/authControllers')
const { getPets, createPets, deletePet, photo, petsById, verMas } = require('../controllers/petsControllers')
const token = require('../controllers/AuthToken')


router.get('/mascotas', getPets)
router.post('/createPets/:userId', createPets)
router.delete('/deletePet/:id', deletePet)
router.get('/foto/:petsId', photo)
router.get('/:petsId', verMas)
router.param('petsId', petsById)
router.param('userId', userById)
module.exports = router