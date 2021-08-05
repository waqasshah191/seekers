import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      alignItems: 'start',
    },
    imageWrapper: {
        width: '100%',
        padding: 16,
    },
    image: {
        width: '100%',
        borderRadius: 7,
    },
    content: {
        width: '100%',
        padding: 16,
    },
    contentText: {
        fontSize: 18,
        marginBlock: 16,
        lineHeight: 1.6,
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
    },
    button: {
        fontWeight: 'bold',
        color: '#fff',
        borderRadius: 25,
        paddingBlock: 7,
        paddingInline: 30,
        marginInline: 5,
        minWidth: 'auto',
        "& span": {
            marginLeft: 0,
        }
    },
    facebook: {
        backgroundColor: '#1565C0',
        '&:hover': {
            backgroundColor: '#0D47A1',
        }
    },
    twitter: {
        backgroundColor: '#03A9F4',
        '&:hover': {
            backgroundColor: '#0288D1',
        }
    },
    whatsapp: {
        backgroundColor: '#4CAF50',
        '&:hover': {
            backgroundColor: '#388E3C'
        }
    },
    
}));

export default useStyles;