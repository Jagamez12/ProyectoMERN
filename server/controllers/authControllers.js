const User = require('../models/User')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')



exports.signup = (req, res) => {
    console.log('req-body', req.body)
    const user = new User(req.body)
    user.save((error, user) => {
        if (error) {
            return res.status(400).json({error: 'Hubo un error en esta monda'})
        }
        user.salt = undefined
        user.hashed_password = undefined
        res.json({user})
    })
}

exports.signin = (req, res) => {
    const {email, password} = req.body
    User.findOne({email}, (error, user) => {
        if (error || !user) {
            return res.status(400).json({error: 'Email Inexistente'})
        }

        if(!user.authenticate(password)){
            return res.status(401).json({error: 'Contraseña incorrecta'})
        }

        const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET)

        res.cookie('t', token, {expire: new Date() + 9999})

        const {_id, name, email, role} = user
        return res.json({token, user: {_id, email, name, role}})
    })
}

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if(err || !user){
            return res.status(400).json({ 
                error: "Algo Ocurrio mal :C"
            })
        }
        req.profile = user
        next()
    })
}
// Sign up  asdasd
exports.signout = (req, res) => {
    res.clearCookie('t')
    res.json({message: "Signout success"})
}