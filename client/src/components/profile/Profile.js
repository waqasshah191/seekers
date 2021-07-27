import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import { CardHeader, IconButton, Button, Container, Typography, CardContent, CardActions, Link, Chip } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import RoomIcon from '@material-ui/icons/Room'
import Rating from '@material-ui/lab/Rating'
import { Twitter, Facebook, Instagram, Edit, Delete, Save } from '@material-ui/icons'
import SearchBar from '../searchinprofile/Searchskills'
import Propic from './../images/Mark.jpg'
import Background from './../images/Picture3.jpg'

const useStyles = makeStyles({
  root: {

    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  },

  grid1: {
    marginTop: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

  },
  card1: {
    elevation: 2,
    backgroundColor: '#ffdd99',
    maxWidth: 700,
    height: 'auto',
    padding: 10,

  },
  chip1: {
    margin: 5,
    color: '#ffffff',
    backgroundColor: '#EF6C00'
  },

  card2: {
    elevation: 2,
    backgroundColor: '#eee8aa',
    maxWidth: 700,
    height: 'auto',
    padding: 10

  },
  card3: {
    elevation: 2,
    backgroundColor: '#dde0a9',
    maxWidth: 700,
    height: 'auto',
    padding: 10

  },
  card4: {
    display: 'flex',
    elevation: 2,
    backgroundColor: '#e8e8d6',
    maxWidth: 700,
    height: 'auto',
    padding: 10

  },
  bigAvatar: {
    width: 125,
    height: 125,
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

export default function Profile() {

  const classes = useStyles()

  console.log(`styles: ${JSON.stringify(classes)}`);

  return (
    <Container justify='center' className={classes.root}>
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
                  </div> <br />
                  <div>
                    <Button className={classes.button} variant='contained' color='primary'>
                      Connect
                    </Button>
                  </div>
                </div>
              }

              title={
                <Typography variant='h5'> Mark Halm</Typography>
              }

              subheader={
                <div>
                  <IconButton size='small'>
                    <RoomIcon />
                    39 Somercrest Circle SW, AB, T2Y3H1
                  </IconButton> <br />
                  <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                  <IconButton size='small'>
                    45 Reviews
                  </IconButton> <br /> <br />
                  <Chip label="Piano lesson" className={classes.chip1} />
                  <Chip label="Driving lessons" className={classes.chip1} />

                </div>
              }

            />
            <CardActions>
              <Link href='https://twitter.com'>
                <Twitter fontSize='large' style={{ color: '#1da1f2' }} />
              </Link>
              <Link href='https://www.facebook.com'>
                <Facebook fontSize='large' style={{ color: '#1877f2' }} />
              </Link>
              <Link href='https://www.instagram.com'>
                <Instagram fontSize='large' style={{ color: '#e4405f' }} />
              </Link>
            </CardActions>
            <CardContent>
              <h3>About Me</h3>
              <Container alignItems='center'>
                <Typography component="div" style={{ backgroundColor: '#90ee90', height: '13vh', margin: 7 }}>
                  Hi, I am an engineer with background in Oil and Gas. I have been passionate about music and instruments since my childhood. I am friendly and have easy going personality.
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
                <Typography component="div" border={2} style={{ backgroundColor: '#90ee90', height: '13vh', margin: 7 }}>
                  Ad 1: Hello everyone, I am offering piano lessons for beginners at very reasonable rates. Come to downtown and make sense of your keys.
                </Typography>
              </Container> <br />
              <Container alignItems='center'>
                <Typography component="div" style={{ backgroundColor: '#90ee90', height: '13vh' }}>
                  Ad 2: Hi, I offer driving lessons to learners with class 7 license. I myself have class 5 advanced license and like to help beginners at low rates.
                </Typography>
              </Container> <br />
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