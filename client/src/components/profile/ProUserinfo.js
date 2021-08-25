import React, {useState, useEffect, useContext} from 'react'
import useStyles from './Styles'
import {TextField} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import {CardHeader, IconButton, Button, Container, CardContent, CardActions, ListItemText, Link, Chip} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import {Twitter, Facebook, Instagram, Edit, Delete, Save, PostAdd, Close, Room} from '@material-ui/icons'
import SearchBar from '../searchinprofile/Searchskills'
import PhotoDialog from './Avatardialog'
import AdForm from './AdForm'
import { AppContext } from './../../context/AppProvider'
import { Loading } from "../index"
import { withAuthenticationRequired } from "@auth0/auth0-react"

//import { useAuth0 } from '@auth0/auth0-react'


const CreateProfile = (props) => {
    let [firstName, setFirstName] = useState("")
    let [lastName, setLastName] = useState("")   
    let [address, setAddress] = useState("")
    let [city, setCity] = useState("")
    let [province, setProvince] = useState("")
    let [postalCode, setPostalCode] = useState("")
    //let [email, setEmail] = useState("")    
    let [detailInformation, setDetailInformation] = useState("")
    let [socialMediaUrl, setSocialMediaUrl] = useState({ twitter: '', facebook: '', instagram:''})
    let [skills, setSkills] = useState([])
    let [ad, setAd] = useState([{ adTitle: '', adDescription: '' }])
    let [createError, setCreateError] = useState("")
    let [imageUrl, setImageUrl] =useState("")
    let [loading, setLoading] =useState (true)
    let [submitLoading, setSubmitLoading] = useState(false)
    
    
    
   
    console.log("this is the url",imageUrl)
    const classes= useStyles()

    const { userId: id, user: data, onUser } = useContext(AppContext)

    useEffect(() => {
      if (id) {
        setLoading(true);
        fetch(`/user/${id}`).then(async res => {
          const response = await res.json();
            const userRes = response[0];
            onUser(userRes);
            setFirstName(userRes?.firstName);
            setLastName(userRes?.lastName);
            setPostalCode(userRes?.postalCode);
            setCity(userRes?.city);
            setDetailInformation(userRes?.detailInformation);
            setImageUrl(userRes?.imageUrl);
            setSkills(userRes?.skills || []);
            setAd(userRes?.ad || [{ adTitle: '', adDescription: '' }]);
            const updateSocial = {...socialMediaUrl};
            (userRes?.socialMedia || []).forEach(i => {
              updateSocial[i.socialMediaName] = i.socialMediaLink;
            });
            setSocialMediaUrl(updateSocial);
        }).finally(() => setLoading(false));
      }
    }, [id]);

    async function onCreateClicked() {
        setSubmitLoading(true);
        let currentDate = new Date();
        let profileToCreate = {
            firstName,
            lastName,
            imageUrl,
            address,
            city,
            province,
            postalCode,
            email:data.email,
            detailInformation,
            socialMediaUrl,
            skills,
            ad,
            password: null,
            isProUser: true,
            dataRegisteredAsPro: null,            
            dateRegistered : currentDate,
           
        }
        console.log('Creating new profile with', profileToCreate)

        fetch(`/user/${id}`, {
          method: 'PUT',      
          body: JSON.stringify(profileToCreate),
          headers: {
              'Content-Type': 'application/json',
          }
        }).then(async res => {
          const result = await res.json();
        }).finally(() => setSubmitLoading(false));
    }
    
    /*try{
        let createResponse = await fetch ('/user/', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(profileToCreate)
        })
        if (createResponse.status === 200) {
          props.onCreateProfileClick("Success");
          setSkillForms([]);
          setAd([{ adTitle: '', adDescription: '' }]);
          setSocialMediaUrl({ twitter: '', facebook: '', instagram:''});
      }
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
    }  */  

//This is the event triggered by the onClick button on the form
const onClickAdd = ()=>{
    onCreateClicked();
}
/*const handleAdlist = () => {
  const newad= adlist.concat([ad])
  setAdlist(newad)
} */
/*async function getUserSkills(id) {
  let getResponse = await fetch(`/userSkill/${id}`);
 let data = await getResponse.json();
 console.log("selected skills",data)
 setSkillForms (data);     
}*/
/*const handleSocialChange = (key, value) => {
  const updateSocial = {...socialMediaUrl};
  updateSocial[key] = value;
  setSocialMediaUrl(updateSocial);
}*/
const handleSocialMediaChange = (e) => {
  setSocialMediaUrl({
    ...socialMediaUrl,
    [e.target.name]: e.target.value
  });
}
const handleSkillForms = ({ selectedOption: options }) => {
  const results = options.map(opt => ({ category: opt.value, subCategory: opt.value }))
  setSkills(results);
}
const handleAddAd = () => {
  const updateAdForms = [...ad];
  updateAdForms.push({ adTitle: '', adDescription: '' , subCategory: null, category: null});
  setAd(updateAdForms);
}
const handleRemoveAd = (index) => {
    const updateAdForms = [...ad];
    updateAdForms.splice(index, 1);
    setAd(updateAdForms);
}

const handleChangeAd = (key, value, index) => {
  const updateAdForms = [...ad];
  updateAdForms[index][key] = value;
  setAd(updateAdForms);
}
/*async function getLongLat() { 
  let getResponse = await fetch(`/longLat/${postalCode}`);
  let data = await getResponse.json();
  console.log("this is long lat", data)
  setData (data);     
}*/


const onInputChange=(event, setFunction) =>{
    console.log('Value', event.target.value)
    setFunction(event.target.value)
}
let createProfileStatusDataInvalid = !firstName || (firstName.trim().length === 0)
/*let postAdStatusDataInvalid = !ad || (ad.trim().length ===0)*/
/*const { user } = useAuth0()*/
 return (
    <Container justify='center'>
      <Grid container spacing={1} className={classes.grid1}>
        <Grid item xs={12} alignItems='center'>
          <Card className={classes.card1} style={{ position: "relative", justify: 'center' }}>
            <CardHeader
              avatar={
              <div>
                <PhotoDialog imageUrl={imageUrl} setImageUrl={setImageUrl}/>               
              </div>
              }
              action={
              <div>
               <div> 
                <IconButton marginRight='auto'><Delete/></IconButton>
               </div>               
              </div>
              }
              
              title={
               <div>   
                <TextField 
                id="standard-basic" 
                label="Firstname" 
                required
                inputProps={{style: {fontSize: 25}}}
                value={firstName} 
                onChange={(event) => onInputChange(event,setFirstName)}/>

                <TextField 
                id="standard-basic" 
                label="Lastname" 
                inputProps={{style: {fontSize: 25}}}
                value={lastName} 
                onChange={(event) => onInputChange(event,setLastName)}/>
               </div>
              }        
                
              subheader={
              <div> 
                <IconButton><Room/></IconButton>     
                <TextField 
                id="standard-basic" 
                label="city"
                TextField style ={{width: '20%'}}
                value = {city}
                onChange={(event) => onInputChange(event,setCity)}/>
                
                <TextField 
                id="standard-basic" 
                label="postalcode"
                TextField style ={{width: '40%'}}
                value = {postalCode}
                onChange={(event) => onInputChange(event,setPostalCode)}/>
                <br/> <br/>

                <SearchBar 
                    isMulti
                    closeMenuOnSelect={false}
                    initialValue={skills.map(s => ({ label: s.subCategory, value: s.subCategory }))}
                    onChange={handleSkillForms}
                />                    
              </div>
              }          
                
            />
            <CardActions style={{ position: "relative", top: "-10px", left:"180px"}}>
              
                <Twitter fontSize='large'style={{color: '#1da1f2'}} />
                <TextField 
                {...socialMediaUrl}
                id="standard-basic" 
                label="twitter link"
                name='twitter'
                inputProps={{style: {fontSize: 16}}}
                value={socialMediaUrl.twitter} 
                onChange={handleSocialMediaChange}
                InputLabelProps={{
                  shrink: !!socialMediaUrl?.twitter,}}
                />
              
                <Facebook fontSize='large' style={{color: '#1877f2'}}/>
                <TextField 
                {...socialMediaUrl}
                id="standard-basic" 
                label="fb link"
                name='facebook' 
                inputProps={{style: {fontSize: 16}}}
                value={socialMediaUrl.facebook} 
                onChange={handleSocialMediaChange}
                InputLabelProps={{
                  shrink: !!socialMediaUrl?.facebook,}}
                />
              
                <Instagram fontSize='large' style={{color: '#e4405f'}}/>
                <TextField 
                {...setSocialMediaUrl}
                id="standard-basic" 
                label="insta link"
                name='instagram' 
                inputProps={{style: {fontSize: 16}}}
                value={socialMediaUrl.instagram} 
                onChange={handleSocialMediaChange}
                InputLabelProps={{
                  shrink: !!socialMediaUrl?.instagram,}}
                />
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
              <h3>Ads List</h3>
              <div>
                  {ad.map((s, index) => (
                      <div key={index} >
                          {index > 0 && (
                              <div onClick={() => handleRemoveAd(index)}>
                                  <Close />
                              </div>
                          )}
                          <AdForm 
                              value={s}
                              skills={skills}
                              onChangeTitle={value => handleChangeAd('adTitle', value, index)}
                              onChangeDescription={value => handleChangeAd('adDescription', value, index)}
                              onChangeSkill={value => {
                                handleChangeAd('subCategory', value, index);
                                handleChangeAd('category', value, index)
                              }}
                          />
                      </div>
                  ))}
              </div>
              <div onClick={handleAddAd}>+ Add more ads</div>
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
          <Button type="submit" variant="contained" color={submitLoading ? 'secondary' : 'primary'} className={classes.button} disabled={createProfileStatusDataInvalid} style={{ position: "relative", left: "450px" }}  onClick={onClickAdd}>
          {submitLoading ? 'Saving...': 'Save Changes'}
          </Button>
          </Card>
        </Grid>
     
      </Grid>
  
    </Container>   
  )
}
export default withAuthenticationRequired(CreateProfile)