const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.signup = (req, res) => {

    User.findOne({ email: req.body.email }) // primeiro verificar se existe o usuário pelo corpo do email
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
                    message: 'User created Sucessfully!!!'
                    //user: data
                })
            }
        });

    });
}


exports.signin = (req, res) => {
    User.findOne({ email: req.body.email })
    .exec((error, user) => {
        if(error) return res.status(400).json({ error });
        if(user){
            if(user.authenticate(req.body.password)){
                const token = jwt.sign({_id: user.id, role: user.role}, process.env.JWT_SECRET, {expiresIn: '1h'});
                const { _id, firstName, lastName, email, role, fullName } = user;
                res.status(200).json({
                    token,
                    user: { _id, firstName, lastName, email, role, fullName }
                });
            }else{
                return res.status(400).json({
                    message: 'Invalid Password'
                });
            }
        }else{
            return res.status(400).json({message: 'Something went wrong!'});
        }
    });
}


