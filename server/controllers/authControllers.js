const User = require('../models/User')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')



exports.signup = (req, res) => {
    console.log('req-body', req.body)
    const user = new User(req.body)
    user.save((error, user) => {
        if (error) {
            res.json({status: 'Algo salio mal'})
        }
        user.salt = undefined
        user.hashed_password = undefined
        res.json({user})
    })
}

exports.signin = (req, res) => {
    const {email, password} = req.body
    User.findOne({email}, (err, user) => {
        if (err || !user) {
            res.json({status: 'Esto salio mal o el usuario no existe'})
        }

        if(!user.authenticate(password)){
            res.json({status: 'Email and password dont match'})
        }

        const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET)

        res.cookie('t', token, {expire: new Date() + 9999})

        const {_id, name, email, role} = user
        return res.json({token, user: {_id, email, name, role}})
    })
}


// Sign up 
