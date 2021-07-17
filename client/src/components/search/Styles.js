import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    button: {
        fontSize: 15,
        borderRadius: 25,
        paddingBlock: 7,
        paddingInline: 30,
        display: 'block',
        minWidth: 'auto',
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
        display: 'flex',
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
        fontWeight: 'bold'
    },
    container: {
        display: 'flex',
        alignItems: 'start',
        paddingBlock: 16,
    },
    avatar: {
        width: theme.spacing(9),
        height: theme.spacing(9),
        marginRight: 16
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