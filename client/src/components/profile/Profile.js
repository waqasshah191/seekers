import React from 'react'
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"
import { Loading } from "../index"
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import {CardHeader, IconButton, Button, Container, Typography, CardContent, CardActions, Link} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import RoomIcon from '@material-ui/icons/Room'
import Rating from '@material-ui/lab/Rating'
import {Twitter, Facebook, Instagram, Edit, Delete, Save} from '@material-ui/icons'
import SearchBar from '../searchinprofile/Searchskills'

const useStyles = makeStyles({

  grid1:{
      marginTop: 20,
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

// const Profile = () => {
//   const { user } = useAuth0();
//   const { name, picture, email } = user;

//   return (
//     <div>
//       <div className="row align-items-center profile-header">
//         <div className="col-md-2 mb-3">
//           <img
//             src={picture}
//             alt="Profile"
//             className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
//           />
//         </div>
//         <div className="col-md text-center text-md-left">
//           <h2>{name}</h2>
//           <p className="lead text-muted">{email}</p>
//         </div>
//       </div>
//       <div className="row">
//         <pre className="col-12 text-light bg-dark p-4">
//           {JSON.stringify(user, null, 2)}
//         </pre>
//       </div>
//     </div>
//   );
// };

// export default withAuthenticationRequired(Profile, {
//   onRedirecting: () => <Loading />,
// });

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;
  
  const classes = useStyles()

 console.log (`styles: ${JSON.stringify(classes)}`);

 return (
    <Container justify='center'>
      <Grid container spacing={1} className={classes.grid1}>
        <Grid item xs={12} alignItems='center'>
          <Card className={classes.card1}>
            <CardHeader
              avatar={
              <Avatar className={classes.bigAvatar}>
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
               <IconButton marginRight='auto'><Edit/></IconButton>
               <IconButton marginRight='auto'><Delete/></IconButton>
              </div>
              }
              
              title={
                <Typography variant='h5'>Name</Typography>
              }        
                
              subheader={
              <div>
                <IconButton>
                <RoomIcon/>
                  address
                </IconButton> <br/>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> 
                <IconButton size='small'>
                  45 Reviews
                </IconButton>
                <SearchBar/> 
                            
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
              <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '10vh' }} />
              </Container>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.card2}>
            <CardContent>
              <h3>Post Ad</h3>  
              <Container alignItems='center'>
              <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '10vh' }} />
              </Container> <br/>
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
          <Button variant="contained" color="primary" startIcon={<Save/>}>
           Save
          </Button>
          </Card>
        </Grid>
     
      </Grid>
  
    </Container>
    
     
  )
}

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});