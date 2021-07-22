const express = require('express');
const router = express.Router();
const user = require('../models/user');

//List all users
router.get('/', async (req, res) => {

//    let data1 = await user.find({}).populate("ad.rating.user", {firstName: 1, lastName: 1});
    let data1 = await user.find({}).lean().populate("ad.rating.user", {firstName: 1, lastName: 1}, {} );

    //get data of aggregated average rating of all reviews per user
    //let data = await user.find({"ad.subCategory": new RegExp(req.params.subCategory), postalCode: new RegExp(req.params.postalCode) });
    let data2 = await user.aggregate([
        { 
            "$unwind" : "$ad"
        }, 
        { 
            "$unwind" : "$ad.rating"
        }, 
        {
            "$group" : {
                "_id" : "$_id",
                //"detail" : {"$first" : "$$ROOT"},
                //"Sum" : { "$sum" : "$ad.rating.ratingScore" },
                "avgRatingScore" : { "$avg" : "$ad.rating.ratingScore" }
                //"Count" : { "$sum" : 1 }
                }                     
        }
    ])

    console.log("data1 = ", data1)
    console.log("data2 = ", data2)    

    //conbine data from data 1 and data 2
    let data3 = data1.map(obj => {
        const index = data2.findIndex(el => el["_id"].toString() === obj["_id"].toString());
        const { avgRatingScore } = index !== -1 ? data2[index] : {};
        return {
            ...obj,
            avgRatingScore
        };
    });

    console.info('Records retrieved from mongoose:', data1?.length);
    res.send(data3);
})

//Find one user by id
router.get('/:id', async (req, res) => {
    try{
        console.log('id = ', req.params.id);
        //let data = await user.find({}).populate("userLevel", {name:1});
        let data1 = await user.find({_id: req.params.id}).lean().populate("ad.rating.user", {firstName: 1, lastName: 1});

        //get data of aggregated average rating of all reviews per user
        //let data = await user.find({"ad.subCategory": new RegExp(req.params.subCategory), postalCode: new RegExp(req.params.postalCode) });
        let data2 = await user.aggregate([
            { 
                "$unwind" : "$ad"
            }, 
            { 
                "$unwind" : "$ad.rating"
            }, 
            {
                "$group" : {
                    "_id" : "$_id",
                    //"detail" : {"$first" : "$$ROOT"},
                    //"Sum" : { "$sum" : "$ad.rating.ratingScore" },
                    "avgRatingScore" : { "$avg" : "$ad.rating.ratingScore" }
                    //"Count" : { "$sum" : 1 }
                    }                     
            }
        ]);

        //conbine data from data 1 and data 2
        let data3 = data1.map(obj => {
            const index = data2.findIndex(el => el["_id"].toString() === obj["_id"].toString());
            const { avgRatingScore } = index !== -1 ? data2[index] : {};
            return {
                ...obj,
                avgRatingScore
            };
        });

        console.info('Found the user:', data3);
        res.send(data3);

    } catch(error){
        console.log(error);
        res.sendStatus(500);
    }
})

//Find users by skill
//To use in Postman:  http://localhost:3000/user/skill/dish
router.get('/skill/:skill', async function(req, res) {
    try{
        console.log('skill = ', req.params.skill);
        //let data = await user.find({skills: req.params.skill});
        let data = await user.find({"skills.subCategory": new RegExp(req.params.skill)});
        console.info('Found the users with skill :', data);
        res.send(data);
    } catch(error){
        console.log(error);
        res.sendStatus(500);
    }
})


//Find users by ad.subCategory
//To use in Postman:  http://localhost:3000/user/adSubCategory/Drawing classes
//router.get('/adSubCategory/:subCategory', async function(req, res) {
router.get('/adSubCategory/:subCategory', async (req, res) => {
    try{

        console.log('subCategory = ', req.params.subCategory);
//        let data = await user.find({"ad.subCategory": new RegExp(req.params.subCategory)}).populate("ad.rating.user", {firstName: 1, lastName: 1});

        let data1 = await user.aggregate([
            {
                "$match" : {"ad.subCategory": new RegExp(req.params.subCategory)}
            },
            { 
                "$unwind" : "$ad"
            },
            {
                "$match" : {"ad.subCategory": new RegExp(req.params.subCategory)}
            },            
        ])


        //get data of aggregated average rating of all reviews per user
        //let data = await user.find({"ad.subCategory": new RegExp(req.params.subCategory), postalCode: new RegExp(req.params.postalCode) });
        let data2 = await user.aggregate([
            { 
                "$unwind" : "$ad"
            }, 
            { 
                "$unwind" : "$ad.rating"
            }, 
            {
                "$group" : {
                    "_id" : "$_id",
                    //"detail" : {"$first" : "$$ROOT"},
                    //"Sum" : { "$sum" : "$ad.rating.ratingScore" },
                    "avgRatingScore" : { "$avg" : "$ad.rating.ratingScore" }
                    //"Count" : { "$sum" : 1 }
                    }                     
            }
        ])

        //conbine data from data 1 and data 2
        let data3 = data1.map(obj => {
            const index = data2.findIndex(el => el["_id"].toString() === obj["_id"].toString());
            const { avgRatingScore } = index !== -1 ? data2[index] : {};
            return {
                ...obj,
                avgRatingScore
            };
        });

        console.info('Found the users with subCategory :', data3);
        res.send(data3);
    } catch(error){
        console.log(error);
        res.sendStatus(500);
    }
})


//Find users by skill and postal code
//To use in Postman:  http://localhost:3000/user/skillpostalCode/dish&T2Y
router.get('/skillPostalCode/:skill&:postalCode', async function(req, res) {
    try{
        console.log('skill = ', req.params.skill);
        console.log('postalCode = ', req.params.postalCode);
        let data = await user.find({"skills.subCategory": new RegExp(req.params.skill), postalCode: new RegExp(req.params.postalCode) });
        console.info('Found the users with skill and postal code:', data);
        res.send(data);
    } catch(error){
        console.log(error);
        res.sendStatus(500);
    }
})

/*
//Find users by ad.subCategory and postal code
//To use in Postman:  http://localhost:3000/user/skillpostalCode/dish&T2Y
//router.get('/adSubCategoryPostalCode/:subCategory&:postalCode', async function(req, res) {
router.get('/adSubCategoryPostalCodeX/:subCategory&:postalCode', async (req, res) => {
    try{
        console.log('subCategory = ', req.params.subCategory);
        console.log('postalCode = ', req.params.postalCode);
        //let data = await user.find({"ad.subCategory": new RegExp(req.params.subCategory), postalCode: new RegExp(req.params.postalCode) });
        let data = await user.aggregate([          
            {
                "$match" : {"postalCode": new RegExp(req.params.postalCode), "ad.subCategory": new RegExp(req.params.subCategory)}
            },
            { 
                "$unwind" : "$ad"
            },
            {
                "$match" : {"ad.subCategory": new RegExp(req.params.subCategory)}
            },            
        ])

        console.info('Found the users with ad.subCategory and postal code:', data);
        res.send(data);
    } catch(error){
        console.log(error);
        res.sendStatus(500);
    }
})
*/

// TEST
// TEST
// TEST
/*
router.get('/adSubCategoryPostalCodeY/:subCategory&:postalCode', async (req, res) => {
    try{
        console.log('subCategory = ', req.params.subCategory);
        console.log('postalCode = ', req.params.postalCode);
        //let data = await user.find({"ad.subCategory": new RegExp(req.params.subCategory), postalCode: new RegExp(req.params.postalCode) });
        let data = await user.aggregate([
            // { 
            //     "$unwind" : "$ad"
            // }, 
            // { 
            //     "$unwind" : "$ad.rating"
            // }, 
            // {
            //     "$addFields" : { 
            //         avgScore : { $avg: "$ad.rating.ratingScore"}
            //     }
            // },
            {                
                "$match" : {"postalCode": new RegExp(req.params.postalCode), "ad.subCategory": new RegExp(req.params.subCategory)}
            },
            { 
                "$unwind" : "$ad"
            },
            {
                "$match" : {"ad.subCategory": new RegExp(req.params.subCategory)}
            },            
        ])

        console.info('Found the users with ad.subCategory and postal code:', data);
        res.send(data);
    } catch(error){
        console.log(error);
        res.sendStatus(500);
    }
})
*/

//Find users by ad.subCategory and postal code
//To use in Postman:  http://localhost:3000/user/skillpostalCode/dish&T2Y
//router.get('/adSubCategoryPostalCode/:subCategory&:postalCode', async function(req, res) {
    router.get('/adSubCategoryPostalCode/:subCategory&:postalCode', async (req, res) => {
        try{
            console.log('subCategory = ', req.params.subCategory);
            console.log('postalCode = ', req.params.postalCode);

            //get data matching criteria
            let data1 = await user.aggregate([          
                {
                    "$match" : {"postalCode": new RegExp(req.params.postalCode), "ad.subCategory": new RegExp(req.params.subCategory)}
                },
                { 
                    "$unwind" : "$ad"
                },
                {
                    "$match" : {"ad.subCategory": new RegExp(req.params.subCategory)}
                },            
            ])

            //get data of aggregated average rating of all reviews per user
            //let data = await user.find({"ad.subCategory": new RegExp(req.params.subCategory), postalCode: new RegExp(req.params.postalCode) });
            let data2 = await user.aggregate([
                { 
                    "$unwind" : "$ad"
                }, 
                { 
                    "$unwind" : "$ad.rating"
                }, 
                {
                    "$group" : {
                        "_id" : "$_id",
                        //"detail" : {"$first" : "$$ROOT"},
                        //"Sum" : { "$sum" : "$ad.rating.ratingScore" },
                        "avgRatingScore" : { "$avg" : "$ad.rating.ratingScore" }
                        //"Count" : { "$sum" : 1 }
                     }                     
                }

                // {
                //     "$lookup" : {
                //         from : "sumResult",
                //         localField : "_id",
                //         foreignField : "_id",
                //         as : "avgCollection"
                //     }
                // },

                // {
                //     "$match" : {"postalCode": new RegExp(req.params.postalCode), "ad.subCategory": new RegExp(req.params.subCategory)}
                // },
                // { 
                //     "$unwind" : "$ad"
                // },
                // {
                //     "$match" : {"ad.subCategory": new RegExp(req.params.subCategory)}
                // }



                // { 
                //     "$unwind" : "$detail.ad"
                // }, 
                // { 
                //     "$unwind" : "$detail.ad.rating"
                // }, 

                // {
                //     $replaceRoot: {
                //       newRoot: { $mergeObjects: [{ "Avg": '$Avg' }, '$detail'] },
                //     },
                // },


                // { 
                //     "$unwind" : "$detail.ad"
                // },
                // {
                //     "$match" : {"$detail.postalCode": new RegExp(req.params.postalCode), "$detail.ad.subCategory": new RegExp(req.params.subCategory)}
                // },

                // { 
                //     "$unwind" : "$detail.ad"
                // },
                // {
                //     "$match" : {"$detail.ad.subCategory": new RegExp(req.params.subCategory)}
                // }

                // {"$project" : {
                //     "_id" : "$detail._id",
                //     "firstName" : "$detail.firstName",
                //     "lastName" : "$detail.lastName",
                //     "ad.category" : "$detail.ad.category",
                //     "ad.subCategory" : "$detail.ad.subCategory",
                //     "ad.adTitle" : "$detail.ad.adTitle",
                //     "ad.adDescription" : "$detail.ad.adDescription",
                    
                //     // "ad.rating.ratingScore" : "$detail.ad.rating.ratingScore",
                //     // "ad.rating.dateAdded" : "$detail.ad.rating.dateAdded",

                //     "avgRating" : "$Avg"
                //     }
                //},                

            ])

            //conbine data from data 1 and data 2
            let data3 = data1.map(obj => {
                const index = data2.findIndex(el => el["_id"].toString() === obj["_id"].toString());
                const { avgRatingScore } = index !== -1 ? data2[index] : {};
                return {
                   ...obj,
                   avgRatingScore
                };
             });
            
            //let data3 = data2.map(x => Object.assign(x, data1.find(y => y._id.toString() === x._id.toString() )));            

            console.info('Found the users with ad.subCategory and postal code:', data3);
            res.send(data3);
        } catch(error){
            console.log(error);
            res.sendStatus(500);
        }
    })



//Find users by skill and city
//To use in Postman:  http://localhost:3000/user/skillpostalCode/dish&Calgary
router.get('/skillCity/:skill&:city', async function(req, res) {
    try{
        console.log('skill = ', req.params.skill);
        console.log('city = ', req.params.city);
        let data = await user.find({"skills.subCategory" : new RegExp(req.params.skill), city: new RegExp(req.params.city) });
        console.info('Found the users with skill and city:', data);
        res.send(data);
    } catch(error){
        console.log(error);
        res.sendStatus(500);
    }
})

//Create a new user
router.post('/', async (req, res) =>{
    try{
        let newUser = new user(req.body);
        await newUser.save();
        console.log("Created a new user:", newUser);
        res.send(newUser);
    } catch(error){
        console.log(error);
        if(error.code === 11000){
            res.status(409).send(`User '${req.body.name}' already exists`);
        }else{
            res.sendStatus(500);
        }
    }
})

//Update a user by id
router.put('/:id', async (req, res) =>{
    let userToUpdate = req.body;
    try{
        let data = await user.findByIdAndUpdate(req.params.id, userToUpdate);
        console.log('updated user:', data);
        res.send(data);
    } catch(error){
        console.log(error)
        res.sendStatus(500)
    }
})

//delete a user by id
router.delete('/:id', async (req, res) => {
    try{
        let data = await user.findByIdAndDelete(req.params.id)
        if(!data){
            res.sendStatus(404) 
        }else{
            console.log('Deleted user:', data);
            res.send(data);
        }
    }catch(error){
        console.log(error);
        res.sendStatus(500);
    }
})

module.exports = router;
  
      












