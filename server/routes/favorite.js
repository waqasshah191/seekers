var express = require('express');
var router = express.Router();
const favorite = require('../models/favorite');

/* List all favorite */
router.get('/', async (req, res) => {

  let data = await favorite.find({}).populate("user", {firstName:1, lastName:1}).populate("favorite", {firstName:1, lastName:1});

  console.info(`Records retrieved from mongoose:`, data?.length)
  console.log('data returned =', data)
  res.send(data);

});

/* List favorite by ID. */
router.get('/:id', async function(req, res) {
  
  try {
    const data = await favorite.findOne({_id: req.params.id}).populate("user", {firstName:1, lastName:1}).populate("favorite", {firstName:1, lastName:1});
    console.info(`Found favorite:`, data)
    res.send(data);
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }

});

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