const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/signin', (req, res) => {

    
});

router.get('/signup', (req, res) => {
    User.findOne({ email: req.body.email }) // primeiro verificar se existe o usuário
    .exec((error, user) => {
        if(user) return res.status(400).json({
            message: "User already registered"
        })

        const  {
            firstName,
            lastName,
            email,
            password
        } = req.body;
        // se o usuário não está registrado, vamos criar o registro então
        const _user = new User ({
            firstName,
            lastName,
            email,
            password,
            username: Math.random().toString()
        });

        // erro ou não ao salvar os dados do _user
        _user.save((error, data) => {
            if(error){
                return res.status(400).json({
                    message: 'Something went wrong'
                });
            }

            if(data){
                return res.status(201).json({
                    user: data
                })
            }
        });

    });

});

module.exports = router;