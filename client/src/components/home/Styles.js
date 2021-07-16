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
    search: {
        background: '#999',
        padding: 16,
    },
    form: {
        display: 'flex',
        alignItems: 'center',
        marginBlock: 10,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        boxShadow: '0 0 3px 1px rgba(0, 0, 0, 0.1)',
        border: '1px solid #999',
        margin: 8
    },
    chip: {
        margin: 5,
        backgroundColor: '#fff',
    },

    categories: {
        padding: 16,
        margin: 0,
        listStyle: 'none',
        backgroundColor: '#aaa',
        minWidth: 300,
        width: 300,
    },

    category: {
        position: 'relative',
        '&:hover': {
            "& $subcategories": {
                display: 'block',
            }
        },
    },

    subcategories: {
        display: 'none',
        position: 'absolute',
        top: 0,
        left: '100%',
        width: 300,
        backgroundColor: '#fff',
        padding: 16,
        margin: 0,
        listStyle: 'none',
        borderRadius: 5,
        boxShadow: '0 0 3px 1px rgba(0,0,0,0.1)',
        zIndex: 10,
    },

    link: {
        fontSize: 16,
        display: 'block',
        textDecoration: 'none',
        color: '#000',
        padding: 10,
    },

    wrapper: {
        display: 'flex',
        alignItems: 'stretch',
        marginBlock: 16
    },

    banner: {
        display: 'flex',
        alignItems: 'center',
        width: 'calc(100% - 300px)',
        height: '100%',
        position: 'relative',
        marginLeft: 16
    },

    bannerImage: {
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },

    bannerContent: {
        position: 'absolute',
        left: '10%',
        width: 300
    },

    bannerTitle: {
        fontSize: 30,
        marginBottom: 16
    },

    bannerDesc: {
        fontSize: 16,
        textAlign: 'center'
    },

    contentContainer: {
        backgroundColor: '#eee',
        padding: 16,
    },

    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '50%',
        textAlign: 'center',
        padding: 16
    },

    contentTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },

    contentDescription: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center'
    },

    videoBanner: {
        width: '50%'
    },

    video: {
        width: '100%'
    }
});

export default useStyles;