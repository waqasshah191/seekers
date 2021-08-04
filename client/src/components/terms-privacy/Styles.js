import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      alignItems: 'start',
    },
    
    content: {
        width: '100%',
        padding: 16,
        '& > p': {
            fontSize: 18,
            lineHeight: 1.7
        },
        '& > h4': {
            fontSize: 20,
            lineHeight: 1.7,
            marginTop: 10
        }
    },
}));

export default useStyles;