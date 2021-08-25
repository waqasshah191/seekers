import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    button: {
        fontSize: 15,
        borderRadius: 25,
        paddingBlock: 7,
        paddingInline: 30,
        display: 'block',
        minWidth: 'auto',
        textAlign: 'center',
        backgroundColor: '#999',
        "&:hover": {
            backgroundColor: '#bbb',
            color: '#000',
        },
        "& span": {
            marginLeft: 0,
        }
    },
    root: {
        width: 'calc(100% - 500px)',
        backgroundColor: '#FDF0BD',
        marginRight: 20,
    },
    link: {
        display: 'block',
        color: '#000',
        textDecoration: 'none',
    },
    map: {
        width: '500px',
    },
    head: {
        alignItems: 'center',
        marginBottom: 10,
    },
    headMeta: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 8,
    },
    inline: {
        display: 'inline',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    container: {
        display: 'flex',
        alignItems: 'start',
        paddingBlock: 16,
    },
    avatarContainer: {
        minWidth: 120,
        textAlign: 'center',
        paddingRight: 5,
    },
    avatar: {
        width: theme.spacing(9),
        height: theme.spacing(9),
        margin: 'auto',
    },
    reviews: {
        display: 'block',
        fontSize: 11,
        fontWeight: 'bold',
        color: '#999',
    },
    information: {
        padding: 8
    },
    date: {
        display: 'block',
        marginTop: 10,
        color: '#999',
        textAlign: 'center'
    }
}));

export default useStyles;