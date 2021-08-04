import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import {CardHeader, IconButton, Button, Container, Typography, CardContent, CardActions, Link, Chip} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import RoomIcon from '@material-ui/icons/Room'
import Rating from '@material-ui/lab/Rating'
import {Twitter, Facebook, Instagram, Edit, Delete, Save} from '@material-ui/icons'
import SearchBar from '../searchinprofile/Searchskills'
import Propic from './../images/Susan.jpg'
import Background from './../images/Picture3.jpg'

const useStyles = makeStyles({
  root:{
    
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  },

  grid1:{
      marginTop: 0,
      display: 'flex',
      justifyContent:'center',
      alignItems:'center'
      
  },
  card1:{
    elevation: 2,
    backgroundColor: '#ffdd99',
    maxWidth: 700,
    height:'auto',
    padding: 10,
    
  },
  chip1:{

    color:'#ffffff',
    backgroundColor: '#8a2be2' 
  },

  card2:{
    elevation: 2,
    backgroundColor: '#eee8aa',
    maxWidth: 700,
    height:'auto',
    padding: 10

  },
  card3:{
    elevation: 2,
    backgroundColor: '#dde0a9',
    maxWidth: 700,
    height:'auto',
    padding: 10

  },
  card4:{
    display:'flex',
    elevation: 2,
    backgroundColor: '#e8e8d6',
    maxWidth: 700,
    height:'auto',
    padding: 10

  },
  bigAvatar: {
        width: 100,
        height: 100,
        margin: 5
  },
  button: {
    fontSize: 17,
    borderRadius: 25,
    paddingBlock: 7,
    paddingInline: 30,
    display: 'block',
    minWidth: 'auto',
    "& span": {
        marginLeft: 0,
    }
  }
})

export default function UserProfile() {
  
  const classes = useStyles()

 console.log (`styles: ${JSON.stringify(classes)}`);

 return (
    <Container justify='center'className={classes.root}>
      <Grid container spacing={1} className={classes.grid1}>
        <Grid item xs={12} alignItems='center'>
          <Card className={classes.card1}>
            <CardHeader
              avatar={
              <Avatar className={classes.bigAvatar} img src={Propic}> 
              </Avatar>
              }
              action={
              <div>
               <div> 
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
                <Typography variant='h5'> Susan Keller</Typography>
              }        
                
              subheader={
              <div>
                <IconButton size='small'>
                <RoomIcon/>
                45 Bridleridge Ln SW, AB, T2Y0E4
                </IconButton> <br/>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> 
                <IconButton size='small'>
                  8 Reviews
                </IconButton> <br/> <br/>
                <Chip label="Drawing class" className={classes.chip1}/> 
                <Chip label="Math Tutor" className={classes.chip1}/>
                            
              </div>
              }          
                
            />
            <CardActions>
              <Link href='https://twitter.com'>
                <Twitter fontSize='large'style={{color: '#1da1f2'}} />
              </Link>
              <Link href='https://www.facebook.com'>
                <Facebook fontSize='large' style={{color: '#1877f2'}}/>
              </Link>
              <Link href='https://www.instagram.com'>
                <Instagram fontSize='large' style={{color: '#e4405f'}}/>
              </Link>
            </CardActions>
            <CardContent>
              <h3>About Me</h3>  
              <Container alignItems='center'>
              <Typography component="div" style={{ backgroundColor: '#fcf3cf', height: '10vh'}}> 
               Hi, I am consultant with expertise in academia. I like to teach and guide students. I enjoy sketching and painting and have been an expert with years of practice.
              </Typography>
              </Container>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.card2}>
            <CardContent>
              <h3>Ads List</h3>  
              <Container alignItems='center'>
              <Typography component="div" border={2} style={{ backgroundColor: '#fcf3cf', height: '10vh' }}>
                Hello everyone, here is a tutor doctor to help with math, with tricks and logics. Message me for details about availability and rates.
              </Typography>
              </Container> <br/>
              <Container alignItems='center'>
              <Typography component="div" style={{ backgroundColor: '#fcf3cf', height: '10vh' }}>
                Hi, offering drawing classes as well as example paintings for sale. Lowest rates guaranteed.Message me for details.
              </Typography>
              </Container> <br/>
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
          </Card>
        </Grid>
     
      </Grid>
  
    </Container>
    
     
  )
}