const express = require('express');
const router = express.Router();
const user = require('../models/user');

//List all users
router.get('/', async (req, res) =>{
    let data = await user.find({});
    console.info('Records retrieved from mongoose:', data?.length);
    res.send(data);
})

//Find one user by id
router.get('/:id', async function(req, res) {
    try{
        console.log('id = ', req.params.id);
        //let data = await user.find({}).populate("userLevel", {name:1});
        let data = await user.findOne({_id: req.params.id});
        console.info('Found the user:', data);
        res.send(data);
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
        let data = await user.find({skills: new RegExp(req.params.skill)});

        console.info('Found the users with skill :', data);
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
  
      












