import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    btnGroup: {
        padding: 12,
    },
    button: {
        fontSize: 17,
        borderRadius: 25,
        paddingBlock: 7,
        paddingInline: 30,
        display: 'block',
        minWidth: 'auto',
        marginBottom: 16,
        marginInline: 'auto',
        "& span": {
            marginLeft: 0,
        }
    },
    container: {
        paddingBlock: 16,
    },
    profileCard: {
        backgroundColor: '#efe09e',
    },
    avatar: {
        width: 180,
        height: 180,
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
    },
    reviews: {
        fontWeight: 'bold',
        marginLeft: 5
    },
    address: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        marginTop: 8
    },
    chip: {
        margin: 5,
        backgroundColor: '#EF6C00',
        color: '#fff'
    },
    label: {
        fontSize: 20,
        color: '#666',
    },
    text: {
        fontWeight: 'bold',
        color: '#000',
        marginBlock: 8,
    },
    listContainer: {
        backgroundColor: '#dde0a9',
    },
    adItem: {
        display: 'flex',
        alignItems: 'start',
        borderBottom: '1px solid #ddd',
        padding: 12,
        '&:last-child': {
            borderBottom: 'none'
        },
    },
    adImg: {
        width: 150,
        height: 80,
        objectFit: 'contain',
        background: '#e6e6e6',
        marginRight: 15,
    },
    adContent: {
        width: 'calc(100% - 280px)',
    },
    adTitle: {
        marginBottom: 8
    },
    adActions: {
        width: 100,
        marginLeft: 15,
        textAlign: 'center',
    },
    date: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#999',
    },
    reviewItem: {
        listStyle: 'none',
        padding: 12,
        borderBottom: '1px solid #ddd',
        '&:last-child': {
            borderBottom: 'none'
        },
    },
    reviewHead: {
        display: 'flex',
        alignItems: 'center'
    },
    reviewName: {
        fontSize: 18,
        marginRight: 16
    },
    reviewBody: {
        fontWeight: 'bold',
        marginBlock: 8,
    }
}));

export default useStyles;