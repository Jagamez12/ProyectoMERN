const Adopted = require('../models/Adopted')
const User = require('../models/User')
const Pets = require('../models/Pets')
const token = require('./AuthToken')

exports.Adopted = async(req, res) => {
    console.log(req.body)    
    const adopted = new Adopted(req.body)
    await adopted.save()
    
    res.json({status: 'Saved'})
}
exports.AdoptedPetByUser = async (req, res, next) => {
    //Se verifica el id obtenido del token
    const USER = await User.findById(req.userId);
    //if (!USER) {
      //return res.status(404).json({ message: "No user found" });
    //}
  
    //Del id obtenido de la URL se obtienen sus datos
    const pet = await Pets.findById(req.params.id);
    if (!pet) {
      return res.status(404).json({ message: "No pet Found" });
    }
    const namePet = pet.name;
    const edadPet = pet.edad;
    const especie = pet.especie;
    const genero = pet.genero;
    const raza = pet.raza;
    const nameUser = USER.name;
    const nameOwner = pet.nameOwner;
  
    //Los datos se almacenan en el nuevo modelo
    const adopted = new Adopted({
      namePet,
      edadPet,
      especie,
      genero,
      raza,
      nameUser,
      nameOwner,
    });
  
    try {
      await adopted.save();
      res.json({ adopted });
    } catch (error) {
      res.status(400).json({ message: "Error al guardar" }, { error: error });
    }
    //Una ves almacenado los datos de esta mascota en el nuevo modelo, este se elimina del anterior modelo.
  };
exports.deleteAdopted = async(req, res) => {
    await Adopted.findByIdAndDelete(req.params.id)
    res.json({status: 'Deleted'})
}

exports.getAdopted = async(req, res) => {
    Adopted.find().exec((err, data) => {
        if (err) {
            console.error(err)
        }
        res.json(data)
    })
}