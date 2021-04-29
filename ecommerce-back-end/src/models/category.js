const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String, 
        required: true, 
        unique: true
    },
    categoryImage: {
        type: String
    },
    parentId: {
        type: String
    }

}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);
// trim: é usado para remover os espaços na string - sendo no inicio ou fim;
// eu posso querer introduzir a String assim no banco: "ABC ", " ABC ";
// porém no Banco mongosse é salvo sem os espaços: "ABC"

// slug - cria uma URL exclusiva para aplicação a partir do unique: true

// parentId - é o id pai de determinada categoria global
// por exemplo, eletrônicos (id) - celulares