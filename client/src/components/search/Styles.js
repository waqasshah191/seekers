import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        width: 'calc(100% - 500px)',
        backgroundColor: '#efe09e',
        marginRight: 20,
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
        marginTop: 8,
        color: '#999'
    }
}));

export default useStyles;