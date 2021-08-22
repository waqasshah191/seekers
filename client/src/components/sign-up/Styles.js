import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    button: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 15,
        borderRadius: 25,
        paddingBlock: 12,
        paddingInline: 30,
        marginBottom: 20,
        // display: 'block',
        minWidth: 'auto',
        "& span": {
            marginLeft: 0,
        }
    },
    formControl: {
        marginBlock: theme.spacing(1),
        width: '100%',
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        boxShadow: '0 0 3px 1px rgba(0, 0, 0, 0.1)',
        border: '1px solid #999',
        margin: 8
    },
    facebookImage: {
        width: 12,
        marginRight: 'auto',
        marginLeft: 16,
    },
    googkleImage: {
        width: 20,
        marginRight: 'auto',
        marginLeft: 16,
    },
    facebookBtn: {
        backgroundColor: '#3b5998',
        "&:hover": {
            backgroundColor: '#203a72',
        },
        "& span": {
            marginRight: 'auto',
        }
    },
    
    googleBtn: {
        backgroundColor: '#fff',
        color: '#666',
        "&:hover": {
            backgroundColor: '#f7f7f7',
        },
        "& span": {
            marginRight: 'auto',
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
        textAlign: 'center',
        marginBottom: 20,
    },
    authLinkLabel: {
        fontWeight: 'bold',
        display: 'block',
        textAlign: 'center',
        color: '#333',
        marginBottom: 8,
    },
    authLink: {
        fontWeight: 'bold',
        display: 'block',
        textAlign: 'center',
        color: '#FF1744',
        textDecoration: 'none',
    },
    description: {
        display: 'block',
        color: '#333',
    }
}));

export default useStyles;