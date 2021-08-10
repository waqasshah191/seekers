var express = require('express');
var router = express.Router();
const favorite = require('../models/favorite');
const user = require('../models/user');

//Get average rating and review count for all users
async function getRatingData() {
  let data = await user.aggregate([
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

  return data;
}

/* List all favorite */
router.get('/', async (req, res) => {
    let data = await favorite.find({}).populate("user", {firstName:1, lastName:1}).populate("favorite", {firstName:1, lastName:1, skills:{category:1, subCategory:1}});
    // let data = await favorite.find({}).populate("user", {firstName:1, lastName:1}).populate("favorite", {firstName:1, lastName:1, skills:{category:1, subCategory:1}, ad:{rating:{ratingScore:1}}}     

    //Get users ratings
    let userRating = await getRatingData();

    for(let i=0; i<data.length; i++) {

      let fav = data[i].favorite;

      for(let j=0; j<fav.length; j++) {

          console.log("fav = ", j, fav[j]._id )
          const index = userRating.findIndex(el => el["_id"].toString() === fav[j]._id.toString());
          const { avgRatingScore } = index !== -1 ? userRating[index] : {};
          const { countRating } = index !== -1 ? userRating[index] : {};

          let newFav = [...fav];

          newFav[j] = {...newFav[j]._doc, avgRatingScore: avgRatingScore, countRating: countRating}

          fav[j] = newFav[j];
      }
    }

    console.info(`Records retrieved from mongoose:`, data?.length)
    console.log('data returned =', data)
    res.send(data);
  
  });
  

/* List favorite by ID. */
router.get('/:id', async function(req, res) {

  let data = await favorite.find({user: req.params.id}).populate("user", {firstName:1, lastName:1}).populate("favorite", {firstName:1, lastName:1, skills:{category:1, subCategory:1}});
  // let data = await favorite.find({}).populate("user", {firstName:1, lastName:1}).populate("favorite", {firstName:1, lastName:1, skills:{category:1, subCategory:1}, ad:{rating:{ratingScore:1}}}     

  //Get users ratings
  let userRating = await getRatingData();

  for(let i=0; i<data.length; i++) {

    let fav = data[i].favorite;

    for(let j=0; j<fav.length; j++) {

        console.log("fav = ", j, fav[j]._id )
        const index = userRating.findIndex(el => el["_id"].toString() === fav[j]._id.toString());
        const { avgRatingScore } = index !== -1 ? userRating[index] : {};
        const { countRating } = index !== -1 ? userRating[index] : {};

        let newFav = [...fav];

        newFav[j] = {...newFav[j]._doc, avgRatingScore: avgRatingScore, countRating: countRating}

        fav[j] = newFav[j];
    }
  }

  console.info(`Records retrieved from mongoose:`, data?.length)
  console.log('data returned =', data)
  res.send(data);

/* Create a favorite */
router.post('/', async (req, res) => {

  let favoriteCreate = req.body

  try {
    let newFavorite = new favorite(favoriteCreate)
    await newFavorite.save()
    console.log("Created favorite", newFavorite)
    res.send(newFavorite)
  }
  catch (error) {
    console.log(error)
    if (error.code === 11000) {
      res.status(409).send('Favorite  ' + favoriteCreate.user + ' already exists');      
    }
    else {
      res.sendStatus(500)
    }
  }

})

/* Update a favorite by ID. */
router.put('/:id', async function(req, res) {  

  let favoriteToUpdate = req.body

  try {

    console.log("favoriteToUpdate = ", favoriteToUpdate);

    let data = await favorite.findByIdAndUpdate(req.params.id, favoriteToUpdate);
    console.log("Updated Favorite", data)
    res.send(data);
  }
  catch(error) {
    console.log(error)
    res.sendStatus(500)
  }

})

/* Delete a favorite by ID. */
router.delete("/:id", async (req, res) => {

  try {
    const data = await favorite.findByIdAndDelete(req.params.id);

    if (!data) {
      res.sendStatus(404);
    } else {
      console.log("Deleted Favorite", data);
      res.send(data);
    }
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }

});

module.exports = router;