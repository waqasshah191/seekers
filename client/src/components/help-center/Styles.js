import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    tabHeader: {
        backgroundColor: theme.palette.background.paper,
    },
    tabHead: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 16
    },
    question: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 5
    }
}));

export default useStyles;