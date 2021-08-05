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

    emailAddress:{
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

    socialMedia:[{ 
        socialMediaName: String,
        socialMediaLink: String
    },],

    ad:[{ 
        category: String,
        subCategory: String,
        adTitle: String,
        adDescription: String,
        rating: [{
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User"
                },
                ratingScore: Number,
                userFeedback: String,
                dateAdded: Date
            },],
    },],

    password: String,
    isProUser: Boolean,
    dateRegisteredAsPro: Date,
    dateRegistered: Date
});

module.exports = mongoose.model('User', userSchema, 'user');