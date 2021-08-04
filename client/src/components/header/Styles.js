import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
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
    },
    proBtn: {
        marginLeft: 16
    },
    headerContainer: {
        borderBottom: '1px solid #999',
        paddingBlock: 16,
        backgroundColor: 'rgb(242,238,226)',
        elevation: 3
    },
    header: {
        display: 'flex !important',
        alignItems: 'center',
        justifyContent: 'space-between',  
    },

    logo: {
        display: 'block',
        width: '200px',
    },

    logoImage: {
        display: 'block',
        width: '100%',
    },

    buttons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    loginBtn: {
        marginRight: '8px !important'
    },

    menuLink: {
        fontWeight: 'bold',
        padding: 8,
        width: 200,
        textDecoration: 'none',
        color: '#333',
        textAlign: 'right'
    },

    userImage: {
        width: 50,
        height: 50,
        display: 'block',
        borderRadius: '50%',
        marginLeft: 8,
        objectFit: 'cover',
    }
});

export default useStyles;