require('./db');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    province: String,
    postalCode: String,    
    emailAddress:{
        type: String,
        required: true,
        unique: true,
        // trim:true
    },
    detailInformation: String,
    skills:[{ 
        type: String
    },],
    password: String,
    isProUser: Boolean,
    dateRegisteredAsPro: Date,
    dateRegistered: Date
});

/*
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    emailAddress:{
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
*/

//module.exports = mongoose.model('user', userSchema, 'user');
module.exports = mongoose.model('User', userSchema, 'user');