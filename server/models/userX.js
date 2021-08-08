require('./db');
const mongoose = require('mongoose');
require('./userLevel');
const Schema = mongoose.Schema;

const userXSchema = new Schema({
    firstName: String,
    lastName: String,
    email:{
        type: String,
        required: true,
        unique: true,
        // trim:true
    },
    userLevel:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "userLevel" 
    },],
    password: String,
    active: Boolean,
    dateAdded: Date,
    lastUpdateDate: Date
});

module.exports = mongoose.model('userX', userXSchema, 'userX');