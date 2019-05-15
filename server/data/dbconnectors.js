 const mongoose = require('mongoose'); 

// const Schema = mongoose.Schema;

// Mongo connection


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/contacts', {
    useNewUrlParser: true,
});

const contactSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    company: {
        type: String
    }
});

const Contacts = mongoose.model('contacts', contactSchema);

module.exports = { Contacts }