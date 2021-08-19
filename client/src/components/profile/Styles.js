
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
      maxWidth: 1200,
      height:'auto',
      padding: 10,
      paddingBottom:0
      
    },
    card2:{
      elevation: 2,
      backgroundColor: '#eee8aa',
      maxWidth: 1200,
      height:'auto',
      padding: 10
  
    },
    card3:{
      elevation: 2,
      backgroundColor: '#dde0a9',
      maxWidth: 1200,
      height:'auto',
      padding: 10
  
    },
    card4:{
      display:'flex',
      elevation: 2,
      backgroundColor: '#e8e8d6',
      maxWidth: 1200,
      height:'auto',
      padding: 10
  
    },
    bigAvatar: {
          width: 150,
          height: 150,
          margin: 10
    },
    adItem: {
      borderBottom: '1px solid #ddd',
      padding: 12,
      '&:last-child': {
          borderBottom: 'none'
      },
    },
    input: {
      marginRight: 8,
    },
    button: {
      fontSize: 17,
      borderRadius: 25,
      paddingBlock: 7,
      paddingInline: 30,
      display: 'block',
      spacing: 1
    },
    input: {
      backgroundColor: '#fff',
      borderRadius: 10,
      overflow: 'hidden',
      boxShadow: '0 0 3px 1px rgba(0, 0, 0, 0.1)',
      border: '1px solid #999',
      margin: 8
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    chip: {
      margin: 5,
      backgroundColor: '#EF6C00',
      color: '#fff'
    }
  })
  export default useStyles