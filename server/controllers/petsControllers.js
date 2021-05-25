const Pets = require('../models/Pets')
const formidable = require('formidable')
const _ = require('lodash')
const fs = require('fs')




exports.createPets = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if(err){
            console.error(err)
        }
        const { name, edad, especie,genero, raza } = fields
        let pets = new Pets(fields)
        if(files.foto) {
            if(files.foto > 1000000){
                res.json({status: "Imagen es mayor a 1MB"})

            }
            pets.foto.data = fs.readFileSync(files.foto.path)
            pets.foto.contentType = files.foto.type    
        } 
        pets.save((err, result) => {
            if (err) {
                res.json({status: "Algo ocurrio, el proceso fallo"})
            }
            res.json(result)
        })
    })
}

exports.getPets = (req, res) => {
    let orden = req.query.order ? req.query.order : 'asc'
    let sortBy = req.query.sortBy ? req.query.sortBy : 'name'

    Pets.find()
        .select("-foto")
        .populate("category")
        .sort([[sortBy, orden]])
        .exec((err, pets) => {
            if(err){
                res.json({status: "Esta monda no funciono eche pa sabe porque"})
            
            }

            res.json(pets)
        } )
}
exports.photo = (req, res, next) => {
    if(req.pets.foto.data) {
        res.set('Content-Type', req.pets.foto.contentType)
        return res.send(req.pets.foto.data)
    }
    next()
}

exports.deletePet = async(req, res) => {
    await Pets.findByIdAndRemove(req.params.id)
    res.json({ status: "Tu sabias que esto iba a pasar"})
}
exports.petsById = (req, res, next, id) => {
    Pets.findById(id)
        .populate("category")
        .exec((err, pets) => {
            if(err || !pets){
                res.json({ status: "No funciono o no encontro nada"})
            }
            req.pets = pets
            next()
        })
}