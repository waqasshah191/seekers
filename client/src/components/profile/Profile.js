import React, {useState, useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Logo from './../images/pippsy.png'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import { AppBar,CardHeader,Toolbar, IconButton, Button, Container, Typography} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import RoomIcon from '@material-ui/icons/Room'
import auth from './../profile/auth'




const useStyles = makeStyles({

  header:{
      backgroundColor: 'rgb(242,238,226)',
      left: 2
    },
  grid1:{
      marginTop: 20,
      marginLeft:10,
      flexGrow:1,
      direction:'column',
      justifyContent:'center',
      alignItems:'center'
      
  },
  card1:{
    elevation: 2,
    backgroundColor: '#ffdd99',
    maxWidth: 700,
    height:'auto',
    padding: 10

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
    }

})

export default function Profile() {
  
  /*const [name, setName] = useState([])

  useEffect(() => {
    const getname = async () => {
      let response = await fetch('/user');
      let data = await response.json();
      setName(data);
    };
    getname();
  }, []);
  const onInputChange = (event, setFunction) => {
    setFunction(event.target.value);
  };*/
  const classes = useStyles()

 console.log (`styles: ${JSON.stringify(classes)}`);

 return (
    <div>
      <AppBar position='sticky'className={classes.header}>
        <Toolbar>
        <img src={Logo} width="150" height="auto"/>
        </Toolbar>
      </AppBar> 
    
      <Grid container spacing={1} className={classes.grid1}>
        <Grid item xs={12}>
          <Card className={classes.card1}>
            <CardHeader
              avatar={
              <Avatar className={classes.bigAvatar}>
              </Avatar>
              }
              action={
                <Button variant='contained' color='secondary'> Message </Button> 
               
              }
              title='Name'
             // value ={name} onChange={(event) => onInputChange(event,setName)}
              
              
              subheader={
              <IconButton>
              <RoomIcon/>
                address
              </IconButton>
              }
              //subheader={'Ratings and Reviews'}
              
              
            />
            
            <p> About Me </p> 
            <Container fixed>
              <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '10vh' }} />
            </Container>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.card2}>
          <p>Post Ad</p>
          <Container fixed>
              <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '10vh' }} />
          </Container>
          <p>Ads Lists</p>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.card3}>
          <p>Reviews and Ratings</p>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.card4}>
          <p>hello this is 4th</p>
          </Card>
        </Grid>
     
      </Grid>
    </div>
    
      
      

  )
}