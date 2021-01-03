const express = require('express'); // npm install --save express express-validator mongoose
const env = require('dotenv'); // npm install --save dotenv
const app = express();
const bodyParser = express('body-parser');

// comand server: node src/index.serverjs
// npm install --save-dev nodemon
// npm install --save body-parser

// environment variable or you can say constants
env.config();

// adicionar o middleware express-validator para validar os dados de entrada antes de solicitar
app.use(bodyParser());

app.get('/', (req, res, next) =>{
    res.status(200).json({
        message: 'Hello from Server'
    });    
});

app.post('/data', (req, res, next) =>{
    res.status(200).json({
        message: req.body
    });    
});

// app.listen é para ouvir o servidor.
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`); // interpolação
    // Server is running on port 2000
});

// GET : localhost:2000/ - test