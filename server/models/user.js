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

    longitude: String,
    latitude: String,    

    email:{
        type: String
        // required: true,
        // unique: true
        // trim:true
    },
    imageUrl: String,
    detailInformation: String,
    skills:[{ 
        category: String,
        subCategory: String
    },],

    // socialMediaUrl:[{ 
    //     type: String
    // },],

    socialMediaUrl : {    
        twitter: String,
        facebook: String,
        instagram: String
    },

    ad:[{ 
        category: String,
        subCategory: String,
        adTitle: String,
        adDescription: String,
        imageUrl: String,        
        rating: [{
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User"
                },
                ratingScore: Number,
                userFeedback: String,
                dateAdded: Date
            },],
        dateAdded: Date,
        active: Boolean
    },],

    password: String,
    isProUser: Boolean,
    dateRegisteredAsPro: Date,
    dateRegistered: Date
});

module.exports = mongoose.model('User', userSchema, 'user');