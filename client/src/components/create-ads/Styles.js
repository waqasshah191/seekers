import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 15,
        borderRadius: 25,
        paddingBlock: 12,
        paddingInline: 30,
        marginTop: 20,
        color: '#fff',
        backgroundColor: '#4CAF50',
        // display: 'block',
        minWidth: 'auto',
        "& span": {
            marginLeft: 0,
        }
    },
    auth: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '80vh',
        backgroundColor: '#ccc',
    },
    authBox: {
        width: '500px',
        maxWidth: '100%',
        backgroundColor: '#fff',
        paddingBlock: 40,
        paddingInline: 50,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    description: {
        display: 'block',
        color: '#333',
    },
    formControl: {
        marginBlock: theme.spacing(1),
        width: '100%',
    },
    more: {
        cursor: 'pointer',
        paddingBlock: 8
    },
    close: {
        cursor: 'pointer',
    },
    skillForm: {
        paddingBlock: 8,
        borderTop: '1px solid #ccc',
        '&:first-child': {
            borderTop: 'none'
        }
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

export default useStyles;