const express = require('express');
const router = express.Router();
const user = require('../models/user');

//List all users
router.get('/', async (req, res) => {
    let data1 = await user.find({}).lean().populate("ad.rating.user", { firstName: 1, lastName: 1 }, {});

    //get data of aggregated average rating of all reviews per user
    //let data = await user.find({"ad.subCategory": new RegExp(req.params.subCategory), postalCode: new RegExp(req.params.postalCode) });
    let data2 = await user.aggregate([
        {
            "$unwind": "$ad"
        },
        {
            "$unwind": "$ad.rating"
        },
        {
            "$group": {
                "_id": "$_id",
                "avgRatingScore": { "$avg": "$ad.rating.ratingScore" },
                "countRating" : { "$sum" : 1 }
            }
        }
    ])

    //conbine data from data 1 and data 2
    let data3 = data1.map(obj => {
        const index = data2.findIndex(el => el["_id"].toString() === obj["_id"].toString());
        const { avgRatingScore } = index !== -1 ? data2[index] : {};
        const { countRating } = index !== -1 ? data2[index] : {};        
        return {
            ...obj,
            avgRatingScore,
            countRating
        };
    });

    console.info('Records retrieved from mongoose:', data1?.length);
    res.send(data3);
})

//Find one user by id
router.get('/:id', async (req, res) => {
    try {
        console.log('id = ', req.params.id);
        let data1 = await user.find({ _id: req.params.id }).lean().populate("ad.rating.user", { firstName: 1, lastName: 1 });

        //get data of aggregated average rating of all reviews per user
        //let data = await user.find({"ad.subCategory": new RegExp(req.params.subCategory), postalCode: new RegExp(req.params.postalCode) });
        let data2 = await user.aggregate([
            {
                "$unwind": "$ad"
            },
            {
                "$unwind": "$ad.rating"
            },
            {
                "$group": {
                    "_id": "$_id",
                    "avgRatingScore": { "$avg": "$ad.rating.ratingScore" },
                    "countRating" : { "$sum" : 1 }
                }
            }
        ]);

        //conbine data from data 1 and data 2
        let data3 = data1.map(obj => {
            const index = data2.findIndex(el => el["_id"].toString() === obj["_id"].toString());
            const { avgRatingScore } = index !== -1 ? data2[index] : {};
            const { countRating } = index !== -1 ? data2[index] : {};            
            return {
                ...obj,
                avgRatingScore,
                countRating
            };
        });

        console.info('Found the user:', data3);
        res.send(data3);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

async function adSubCategorySearch(subCategory) {

    console.log("subCategory = ", subCategory);

    try {
        console.log('subCategory = ', subCategory);

        let data1 = await user.aggregate([
            {
                "$match": { "ad.subCategory": {$regex: subCategory, $options : 'i'} }
            },
            {
                "$unwind": "$ad"
            },
            {
                "$match": { "ad.subCategory": {$regex: subCategory, $options : 'i'} }
            },
        ])

        //get data of aggregated average rating of all reviews per user
        //let data = await user.find({"ad.subCategory": new RegExp(req.params.subCategory), postalCode: new RegExp(req.params.postalCode) });
        let data2 = await user.aggregate([
            {
                "$unwind": "$ad"
            },
            {
                "$unwind": "$ad.rating"
            },
            {
                "$group": {
                    "_id": "$_id",
                    "avgRatingScore": { "$avg": "$ad.rating.ratingScore" },
                    "countRating" : { "$sum" : 1 }
                }
            }
        ])

        //conbine data from data 1 and data 2
        let data3 = data1.map(obj => {
            const index = data2.findIndex(el => el["_id"].toString() === obj["_id"].toString());
            const { avgRatingScore } = index !== -1 ? data2[index] : {};
            const { countRating } = index !== -1 ? data2[index] : {};
            return {
                ...obj,
                avgRatingScore,
                countRating
            };
        });

        console.info('Found the users with subCategory :', data3);

        return data3;

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }    

}


//Find users by ad.subCategory
//To use in Postman:  http://localhost:3000/user/adSubCategory/Drawing classes
//router.get('/adSubCategory/:subCategory', async function(req, res) {
router.get('/adSubCategory/:subCategory', async (req, res) => {

    let data = await adSubCategorySearch(req.params.subCategory);

    res.send(data);

    // try {
    //     console.log('subCategory = ', req.params.subCategory);

    //     let data1 = await user.aggregate([
    //         {
    //             "$match": { "ad.subCategory": {$regex: req.params.subCategory, $options : 'i'} }
    //         },
    //         {
    //             "$unwind": "$ad"
    //         },
    //         {
    //             "$match": { "ad.subCategory": {$regex: req.params.subCategory, $options : 'i'} }
    //         },
    //     ])

    //     //get data of aggregated average rating of all reviews per user
    //     //let data = await user.find({"ad.subCategory": new RegExp(req.params.subCategory), postalCode: new RegExp(req.params.postalCode) });
    //     let data2 = await user.aggregate([
    //         {
    //             "$unwind": "$ad"
    //         },
    //         {
    //             "$unwind": "$ad.rating"
    //         },
    //         {
    //             "$group": {
    //                 "_id": "$_id",
    //                 "avgRatingScore": { "$avg": "$ad.rating.ratingScore" },
    //                 "countRating" : { "$sum" : 1 }
    //             }
    //         }
    //     ])

    //     //conbine data from data 1 and data 2
    //     let data3 = data1.map(obj => {
    //         const index = data2.findIndex(el => el["_id"].toString() === obj["_id"].toString());
    //         const { avgRatingScore } = index !== -1 ? data2[index] : {};
    //         const { countRating } = index !== -1 ? data2[index] : {};
    //         return {
    //             ...obj,
    //             avgRatingScore,
    //             countRating
    //         };
    //     });

    //     console.info('Found the users with subCategory :', data3);

    //     res.send(data3);

    // } catch (error) {
    //     console.log(error);
    //     res.sendStatus(500);
    // }


})

async function postalCodeSearch(postalCode) {

    try {
        console.log('postalCode = ', postalCode);

        //get data matching criteria
        let data1 = await user.aggregate([
            {
                "$match": { "postalCode": {$regex: postalCode, $options : 'i'} }                
            },
            {
                "$unwind": "$ad"
            },
        ])

        //get data of aggregated average rating of all reviews per user
        let data2 = await user.aggregate([
            {
                "$unwind": "$ad"
            },
            {
                "$unwind": "$ad.rating"
            },
            {
                "$group": {
                    "_id": "$_id",
                    "avgRatingScore": { "$avg": "$ad.rating.ratingScore" },
                    "countRating" : { "$sum" : 1 }
                }
            }
        ])

        //conbine data from data 1 and data 2
        let data3 = data1.map(obj => {
            const index = data2.findIndex(el => el["_id"].toString() === obj["_id"].toString());
            const { avgRatingScore } = index !== -1 ? data2[index] : {};
            const { countRating } = index !== -1 ? data2[index] : {};
            return {
                ...obj,
                avgRatingScore,
                countRating
            };
        });

        //return no match message if no criteria match was found
        if (data3.length === 0) {
            data3 = {"result": "No match found."}
       }

        console.info('Found the users with postal code:', data3);

        return data3;

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

}

//Find users by postal code
//To use in Postman:  http://localhost:3000/user/postalCode/T2Y
router.get('/postalCode/:postalCode', async (req, res) => {

    let data = await postalCodeSearch(req.params.postalCode);

    res.send(data);

    // try {
    //     console.log('postalCode = ', req.params.postalCode);

    //     //get data matching criteria
    //     let data1 = await user.aggregate([
    //         {
    //             "$match": { "postalCode": {$regex: req.params.postalCode, $options : 'i'} }                
    //         },
    //         {
    //             "$unwind": "$ad"
    //         },

    //     ])

    //     //get data of aggregated average rating of all reviews per user
    //     let data2 = await user.aggregate([
    //         {
    //             "$unwind": "$ad"
    //         },
    //         {
    //             "$unwind": "$ad.rating"
    //         },
    //         {
    //             "$group": {
    //                 "_id": "$_id",
    //                 "avgRatingScore": { "$avg": "$ad.rating.ratingScore" },
    //                 "countRating" : { "$sum" : 1 }
    //             }
    //         }

    //     ])

    //     //conbine data from data 1 and data 2
    //     let data3 = data1.map(obj => {
    //         const index = data2.findIndex(el => el["_id"].toString() === obj["_id"].toString());
    //         const { avgRatingScore } = index !== -1 ? data2[index] : {};
    //         const { countRating } = index !== -1 ? data2[index] : {};
    //         return {
    //             ...obj,
    //             avgRatingScore,
    //             countRating
    //         };
    //     });

    //     //return no match message if no criteria match was found
    //     if (data3.length === 0) {
    //         data3 = {"result": "No match found."}
    //    }

    //     console.info('Found the users with postal code:', data3);

    //     res.send(data3);

    // } catch (error) {
    //     console.log(error);
    //     res.sendStatus(500);
    // }
})

//Find users by ad.subCategory and postal code
//To use in Postman:  http://localhost:3000/user/skillpostalCode/dish&T2Y
//router.get('/adSubCategoryPostalCode/:subCategory&:postalCode', async function(req, res) {
router.get('/adSubCategoryPostalCode/:subCategory&:postalCode', async (req, res) => {
    try {
        console.log('subCategory = ', req.params.subCategory);
        console.log('postalCode = ', req.params.postalCode);

        let dataFinal = [];

        //get data matching criteria, subCategory + Postal Code combo
        let data1 = await user.aggregate([
            {
                "$match": { "postalCode": {$regex: req.params.postalCode, $options : 'i'}, "ad.subCategory": {$regex: req.params.subCategory, $options : 'i'} }                
            },
            {
                "$unwind": "$ad"
            },
            {
                "$match": { "ad.subCategory": {$regex: req.params.subCategory, $options : 'i'} }
            },
        ])
       
        console.log("subCategory + postalCode, data1.length = ", data1.length);

        //Found record(s) in subCategory + postal code combe criteria
        if (data1.length > 0) {

            //get data of aggregated average rating of all reviews per user
            //let data = await user.find({"ad.subCategory": new RegExp(req.params.subCategory), postalCode: new RegExp(req.params.postalCode) });
            let data2 = await user.aggregate([
                {
                    "$unwind": "$ad"
                },
                {
                    "$unwind": "$ad.rating"
                },
                {
                    "$group": {
                        "_id": "$_id",
                        "avgRatingScore": { "$avg": "$ad.rating.ratingScore" },
                        "countRating" : { "$sum" : 1 }
                    }
                }

            ])

            //conbine data from data 1 and data 2
            let data3 = data1.map(obj => {
                const index = data2.findIndex(el => el["_id"].toString() === obj["_id"].toString());
                const { avgRatingScore } = index !== -1 ? data2[index] : {};
                const { countRating } = index !== -1 ? data2[index] : {};
                return {
                    ...obj,
                    avgRatingScore,
                    countRating
                };
            });

            //
            // add search by subCategory at end of result
            //
            //get data matching criteria
            // let data4 = await user.aggregate([
            //     // {
            //     //     "$match": { "ad.subCategory": {$regex: req.params.subCategory, $options : 'i'} }                
            //     // },
            //     {
            //         "$unwind": "$ad"
            //     },
            //     {
            //         "$match": { "ad.subCategory": {$regex: req.params.subCategory, $options : 'i'} }
            //     },
            //     {
            //         "$unwind": "$ad"
            //     },
            // ])

            //call search for subcategory    
            //add result to end of data1, subCategory + postal code result
            let data4 = await adSubCategorySearch(req.params.subCategory);

            //exclude records in data4 that are already found in data1
            //data4 = data4.filter( ( el ) => !data1.includes( el ) );
            //data4 = data4.filter(e => data1._id.toString().excludeIDArray.indexOf(e._id.toString()) === -1)
            let data5 = data4.filter(value => !data1.find(x => x["_id"].toString() === value["_id"].toString()));

            dataFinal = [...data3, ...data5];

            console.log('data3 = ', data3);
            console.log('data5 = ', data5);
            console.log('subCategory + postalCode + rest of subCategory, dataFinal = ', dataFinal);

        }
        else { //Nothing found in subCategory + postal code combe criteria
               //try finding just subCategory regardless of postal code, if something found, send it back
               //if subCategory return non, try finding just postal code regardless of subCategory, if something found, send it back
        
            console.log("INSIDE subcategory+postalcode!!!");

            let data6 = await adSubCategorySearch(req.params.subCategory);

            console.log("!!!data6.length = ", data6.length);

            //found something in subCategory
            if (data6.length > 0) {

                console.log("INSIDE subcategory condition if data > 0!!!");

                dataFinal = [...data6];
            }
            else {

                console.log("INSIDE subcategory condition else data > 0!!!");

                let data7 = await postalCodeSearch(req.params.postalCode);

                if (data7.length > 0) {
                    dataFinal = [...data7];
                }
                else {
                    dataFinal = {"result": "No match found."};
                }
            } 
        }

        console.log("dataFinal.length = ", dataFinal.length);

        console.info('Found the users with ad.subCategory and postal code:', dataFinal);
        res.send(dataFinal);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})


//Find users by skill
//To use in Postman:  http://localhost:3000/user/skill/dish
router.get('/skill/:skill', async function (req, res) {
    try {
        console.log('skill = ', req.params.skill);
        //let data = await user.find({skills: req.params.skill});
        let data = await user.find({ "skills.subCategory": new RegExp(req.params.skill) });
        console.info('Found the users with skill :', data);
        res.send(data);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

//Find users by skill and postal code
//To use in Postman:  http://localhost:3000/user/skillpostalCode/dish&T2Y
router.get('/skillPostalCode/:skill&:postalCode', async function (req, res) {
    try {
        console.log('skill = ', req.params.skill);
        console.log('postalCode = ', req.params.postalCode);
        let data = await user.find({ "skills.subCategory": new RegExp(req.params.skill), postalCode: new RegExp(req.params.postalCode) });
        console.info('Found the users with skill and postal code:', data);
        res.send(data);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

//Find users by skill and city
//To use in Postman:  http://localhost:3000/user/skillpostalCode/dish&Calgary
router.get('/skillCity/:skill&:city', async function (req, res) {
    try {
        console.log('skill = ', req.params.skill);
        console.log('city = ', req.params.city);
        let data = await user.find({ "skills.subCategory": new RegExp(req.params.skill), city: new RegExp(req.params.city) });
        console.info('Found the users with skill and city:', data);
        res.send(data);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

//Create a new user
router.post('/', async (req, res) => {
    try {
        let newUser = new user(req.body);
        await newUser.save();
        console.log("Created a new user:", newUser);
        res.send(newUser);
    } catch (error) {
        console.log(error);
        if (error.code === 11000) {
            res.status(409).send(`User '${req.body.name}' already exists`);
        } else {
            res.sendStatus(500);
        }
    }
})

//Update a user by id
router.put('/:id', async (req, res) => {
    let userToUpdate = req.body;
    try {
        let data = await user.findByIdAndUpdate(req.params.id, userToUpdate);
        console.log('updated user:', data);
        res.send(data);
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

//delete a user by id
router.delete('/:id', async (req, res) => {
    try {
        let data = await user.findByIdAndDelete(req.params.id)
        if (!data) {
            res.sendStatus(404)
        } else {
            console.log('Deleted user:', data);
            res.send(data);
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

module.exports = router;