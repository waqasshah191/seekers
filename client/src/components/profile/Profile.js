import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
// import Logo from './../images/pippsy-Logo.jpg'
import Avatar from '@material-ui/core/Avatar'
import {blueGrey } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
    header:{
      padding: 20,
      color: '#f2eee2',
      left: 5,
      // Image: `url(${Logo})`
    },

    root: {
        backgroundColor: blueGrey
    },

      bigAvatar: {
        width: 60,
        height: 60,
        margin: 10
    }

}))
export default function Profile() {
  console.log('working')
 const classes = useStyles()


 return (
  <h1> this is a heading
  <div className={classes.header}>
    <p> "hi"</p>
  </div>
  </h1>

  )
}