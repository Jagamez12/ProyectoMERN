const Adopted = require('../models/Adopted')

exports.Adopted = async(req, res) => {
    const  adopted = new Adopted(req.body)
    await adopted.save()
    res.json({status: 'Saved'})
}

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