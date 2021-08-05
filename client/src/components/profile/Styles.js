
import {makeStyles} from '@material-ui/core/styles'

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
      paddingBottom:0
      
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
          width: 120,
          height: 120,
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
  export default useStyles