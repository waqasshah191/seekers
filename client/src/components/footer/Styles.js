import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    footerContainer: {
        borderTop: '1px solid rgba(0,0,0,0.1)',
        backgroundColor: '#222'
    },
    footer: {
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-between',
    },

    column: {
        padding: 16,
        margin: 0,
        listStyle: 'none',
    },

    link: {
        fontSize: 16,
        display: 'block',
        textAlign: 'center',
        textDecoration: 'none',
        color: '#fff',
        padding: 10,
    },

    headTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        display: 'block',
        textAlign: 'center',
        textDecoration: 'none',
        color: '#fff',
        padding: 10,
    },

    loginBtn: {
        marginRight: 8
    }
});

export default useStyles;