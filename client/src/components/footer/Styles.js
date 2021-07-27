import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    footerContainer: {
        borderTop: '1px solid rgba(0,0,0,0.1)',
        backgroundColor: '#F0F8D4'
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
        color: '#000',
        padding: 10,
    },

    headTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        display: 'block',
        textAlign: 'center',
        textDecoration: 'none',
        color: '#000',
        padding: 10,
    },

    loginBtn: {
        marginRight: 8
    }
});

export default useStyles;