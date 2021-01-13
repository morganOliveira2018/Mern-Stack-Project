// imports
const express = require('express'); // npm install --save express express-validator mongoose
const env = require('dotenv'); // npm install --save dotenv
const app = express();
const mongoose = require('mongoose');
// const bodyParser = express('body-parser');

// comand server: node src/index.serverjs
// npm install --save-dev nodemon
// npm install --save body-parser -> It is deprecated


// routes
const userRotes = require('./routes/user')
// environment variable or you can say constants
env.config();


// MongoDB connection - user:root - password:root
// mongodb+srv://root:<password>@cluster0.wdvwh.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.wdvwh.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(() =>{
    console.log('Database connected');
});


// adicionar o middleware express-validator para validar os dados de entrada antes de solicitar
app.use(express.json());
app.use('/api', userRotes);


// app.get('/', (req, res, next) =>{
//     res.status(200).json({
//         message: 'Hello from Server'
//     });    
// });


// // POST: utilizado quando queremos criar um recurso ou novo registro, cujos dados serão enviados no corpo(body) da requisição
// app.post('/data', (req, res, next) =>{
//     res.status(200).json({
//         message: req.body
//     });    
// });


// app.listen é para ouvir o servidor.
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`); // interpolação
    // Server is running on port 2000
});

// GET : localhost:2000/ - test