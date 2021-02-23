const { check , validationResult } = require('express-validator');

exports.validateSignupRequest = [
    check('firstName')
    .notEmpty()
    .withMessage('Primeiro Nome é necessário'),
    check('lastName')
    .notEmpty()
    .withMessage('Último Nome é necessário'),
    check('lastName'),
    check('email')
    .isEmail()
    .withMessage('Validação do email é necessário'),
    check('password')
    .isLength({ min: 6 })
    .withMessage('Senha deve ter pelo menos 6 caracteres')

]

exports.validateSigninRequest = [
    check('email')
    .isEmail()
    .withMessage('Validação do email é necessário'),
    check('password')
    .isLength({ min: 6 })
    .withMessage('Senha deve ter pelo menos 6 caracteres')

]

exports.isRequestValidated = (req, res, next) => {
	const errors = validationResult(req);
	if(errors.array().length > 0){
		return res.status(400).json({ error: errors.array()[0].msg })
	}
    next(); // você está esperando a resposta e não chega se não colocar o próximo
}