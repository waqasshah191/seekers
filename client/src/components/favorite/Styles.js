import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    container: {
        paddingBlock: 16
    },
    contentText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#666',
        lineHeight: 1.6,
        marginBlock: 20,
    },
    proList: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'start',
    },
    pro: {
        width: '25%',
        padding: 10,
    },
    proImageContainer: {
        position: 'relative',
        width: '100%'
    },
    proImage: {
        width: '100%'
    },
    proRate: {
        position: 'absolute',
        bottom: 5,
        left: 5,
        padding: 5,
    },
    proBookmark: {
        position: 'absolute',
        top: 5,
        right: 5,
        padding: 5,
        color: 'gold',
        cursor: 'pointer',
    },
    proName: {
        fontSize: 28,
        fontWeight: 'bolder',
        color: '#333',
        paddingBlock: 5,
    },
    proPos: {
        fontWeight: 'bold',
        color: '#666',
        marginBottom: 10,
    },
}));

export default useStyles;