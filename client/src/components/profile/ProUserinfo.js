import React, {useState, useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import useStyles from './Styles'
import {Input, TextField} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import {CardHeader, IconButton, Button, Container, Typography, CardContent, CardActions, Link} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import RoomIcon from '@material-ui/icons/Room'
import Rating from '@material-ui/lab/Rating'
import {Twitter, Facebook, Instagram, Edit, Delete, Save, PostAdd} from '@material-ui/icons'
import SearchBar from '../searchinprofile/Searchskills'
//import { useAuth0 } from '@auth0/auth0-react'


const CreateProfile = (props) => {
    let [firstName, setFirstName] = useState("")
    let [lastName, setLastName] = useState("") 
    let [imageUrl, setImageUrl] =useState("")   
    let [address, setAddress] = useState("")
    let [city, setCity] = useState("")
    let [province, setProvince] = useState("")
    let [postalCode, setPostalCode] = useState("")
    let [emailAddress, setEmailAddress] = useState("")    
    let [detailInformation, setDetailInformation] = useState("")
    let [socialMedia, setSocialMedia] = useState([])
    let [skill, setSkill] = useState([])
    let [ad, setAd] = useState([])
    let [createError, setCreateError] = useState("")
    

    const classes= useStyles()
   

    async function onCreateClicked() {
        let currentDate = new Date();
        let profileToCreate = {
            firstName,
            lastName,
            imageUrl,
            address,
            city,
            province,
            postalCode,
            emailAddress,
            detailInformation,
            socialMedia,
            skill,
            ad,
            password: null,
            dataRegisteredAsPro: null,            
            dateRegistered : currentDate,
           
        }
        console.log('Creating new profile with', profileToCreate)
    
    try{
        let createResponse = await fetch ('/user', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(profileToCreate)
        })
        console.log('Create response is', createResponse)
        if (createResponse.status !== 200) {
            let errorMessage = await createResponse.text()
            console.log('We had an error.  it was: ', errorMessage)
            setCreateError(errorMessage)
        }
        else {
            setCreateError(undefined)
        }
    }
    catch (error) {
        // the server cannot be reached
        console.error('Fetch failed to reach the server.')
    }
    }    

//This is the event triggered by the onClick button on the form
const onClickAdd = ()=>{
    onCreateClicked();
}

const onInputChange=(event, setFunction) =>{
    setFunction(event.target.value)
}
let createProfileStatusDataInvalid = !firstName || (firstName.trim().length === 0)
/*let postAdStatusDataInvalid = !ad || (ad.trim().length ===0)*/
/*const { user } = useAuth0()*/
 return (
    <Container justify='center'>
      <Grid container spacing={1} className={classes.grid1}>
        <Grid item xs={12} alignItems='center'>
          <Card className={classes.card1}>
            <CardHeader
              avatar={
              <Avatar className={classes.bigAvatar} style={{ position: "relative", top: "-20px" }}>
              </Avatar>
              }
              action={
              <div>
               <div> 
                <IconButton marginRight='auto'><Edit/></IconButton>
                <IconButton marginRight='auto'><Delete/></IconButton>
                <Button className={classes.button} variant='contained' color='secondary'> 
                 Message 
                </Button> 
               </div> <br/>
               <div>
                <Button className={classes.button} variant='contained' color='primary'>
                 Connect
                </Button>
               </div>               
              </div>
              }
              
              title={
               <div>   
                <TextField 
                id="standard-basic" 
                label="Name" 
                required
                inputProps={{style: {fontSize: 25}}}
                value={firstName} 
                onChange={(event) => onInputChange(event,setFirstName)}/>
               </div>
              }        
                
              subheader={
              <div>
                <IconButton><RoomIcon/></IconButton> 
                <TextField 
                id="standard-basic" 
                label="address"
                value = {address}
                onChange={(event) => onInputChange(event,setAddress)}/>
                <TextField 
                id="standard-basic" 
                label="city"
                TextField style ={{width: '20%'}}
                value = {city}
                onChange={(event) => onInputChange(event,setCity)}/>
                <TextField 
                id="standard-basic" 
                label="province"
                TextField style ={{width: '40%'}}
                value = {province}
                onChange={(event) => onInputChange(event,setProvince)}/>
                <TextField 
                id="standard-basic" 
                label="postalcode"
                TextField style ={{width: '40%'}}
                value = {postalCode}
                onChange={(event) => onInputChange(event,setPostalCode)}/>
                <br/> <br/>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> 
                <IconButton size='small'>
                  45 Reviews
                </IconButton> <br/>
                <SearchBar onChange={(event) => onInputChange(event,setSkill)}/> 
                            
              </div>
              }          
                
            />
            <CardActions style={{ position: "relative", top: "-20px" }}>
              
                <Twitter fontSize='large'style={{color: '#1da1f2'}} />
                <TextField 
                {...socialMedia}
                id="standard-basic" 
                label="twitter link"
                name='twitter'
                inputProps={{style: {fontSize: 16}}}
                value={socialMedia.name} 
                onChange={(event) => onInputChange(event,setSocialMedia)}/>
              
                <Facebook fontSize='large' style={{color: '#1877f2'}}/>
                <TextField 
                {...socialMedia}
                id="standard-basic" 
                label="fb link"
                name='fb' 
                inputProps={{style: {fontSize: 16}}}
                value={socialMedia.name} 
                onChange={(event) => onInputChange(event,setSocialMedia)}/>
              
                <Instagram fontSize='large' style={{color: '#e4405f'}}/>
                <TextField 
                {...setSocialMedia}
                id="standard-basic" 
                label="insta link"
                name='instagram' 
                inputProps={{style: {fontSize: 16}}}
                value={socialMedia.name} 
                onChange={(event) => onInputChange(event,setSocialMedia)}/>
            </CardActions>
            <CardContent style={{ position: "relative", top: "-20px" }}>
              <h3>About Me</h3> <br/> 
              <Container alignItems='center'>
              <TextField 
              id="outlined-multiline-static"
              label="About Me"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              value = {detailInformation}
              onChange={(event) => onInputChange(event,setDetailInformation)}
              style={{ backgroundColor: '#fcf3cf'}}/>
              </Container>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.card2}>
            <CardContent>
              <h3>Post Ad</h3> <br/> 
              <Container alignItems='center'>
              <TextField 
              id="outlined-multiline-static"
              label="Post Ad"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              value = {ad}
              onChange={(event) => onInputChange(event,setAd)}
              style={{ backgroundColor: '#fcf3cf'}}/>
              </Container> <br/>
              <Button variant="contained" color="secondary" startIcon={<PostAdd/>}>
                POST AD
              </Button><br/>
              <h3>Ads List</h3>
            </CardContent> 
                         
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.card3}>
          <CardContent>
              <h3>Reviews</h3>  
              <Container alignItems='center'>
                <IconButton size='small'> Read More</IconButton>
              </Container>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.card4} alignItems='center' justifyContent='center'>
          <Button variant="contained" color="primary" startIcon={<Save/>} disabled={createProfileStatusDataInvalid} onClick={onClickAdd}>
           Save
          </Button>
          </Card>
        </Grid>
     
      </Grid>
  
    </Container>   
  )
}
export default CreateProfile