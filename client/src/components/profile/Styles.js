import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     btnGroup: {
//         padding: 12,
//     },
//     button: {
//         fontSize: 17,
//         borderRadius: 25,
//         paddingBlock: 7,
//         paddingInline: 30,
//         display: 'block',
//         minWidth: 'auto',
//         marginBlock: 16,
//         "& span": {
//             marginLeft: 0,
//         }
//     },
//     input: {
//         marginRight: 8,
//     },
//     container: {
//         paddingBlock: 16,
//     },
//     profileCard: {
//         backgroundColor: '#efe09e',
//     },
//     avatar: {
//         width: 180,
//         height: 180,
//     },
//     flex: {
//         display: 'flex',
//         alignItems: 'center',
//     },
//     socials: {
//         display: 'flex',
//         alignItems: 'center',
//         paddingInline: 16,
//     },
//     reviews: {
//         fontWeight: 'bold',
//         marginLeft: 5
//     },
//     address: {
//         display: 'flex',
//         alignItems: 'center',
//         fontWeight: 'bold',
//         marginTop: 8
//     },
//     chip: {
//         margin: 5,
//         backgroundColor: '#EF6C00',
//         color: '#fff'
//     },
//     label: {
//         fontSize: 20,
//         color: '#666',
//     },
//     text: {
//         fontWeight: 'bold',
//         color: '#000',
//         marginBlock: 8,
//     },
//     listContainer: {
//         backgroundColor: '#eee',
//     },
//     adItem: {
//         borderBottom: '1px solid #ddd',
//         padding: 12,
//         '&:last-child': {
//             borderBottom: 'none'
//         },
//     },
//     adImg: {
//         width: 150,
//         height: 80,
//         objectFit: 'contain',
//         background: '#e6e6e6',
//         marginRight: 15,
//     },
//     adContent: {
//         width: 'calc(100% - 280px)',
//     },
//     adTitle: {
//         marginBottom: 8
//     },
//     adActions: {
//         width: 100,
//         marginLeft: 15,
//         textAlign: 'center',
//     },
//     date: {
//         fontWeight: 'bold',
//         fontSize: 14,
//         color: '#999',
//     },
//     reviewItem: {
//         listStyle: 'none',
//         padding: 12,
//         borderBottom: '1px solid #ddd',
//         '&:last-child': {
//             borderBottom: 'none'
//         },
//     },
//     reviewHead: {
//         display: 'flex',
//         alignItems: 'center'
//     },
//     reviewName: {
//         fontSize: 18,
//         marginRight: 16
//     },
//     reviewBody: {
//         fontWeight: 'bold',
//         marginBlock: 8,
// import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({

    grid1: {
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    card1: {
        elevation: 2,
        backgroundColor: '#ffdd99',
        maxWidth: 1200,
        height: 'auto',
        padding: 10,
        paddingBottom: 0

    },
    card2: {
        elevation: 2,
        backgroundColor: '#eee8aa',
        maxWidth: 1200,
        height: 'auto',
        padding: 10

    },
    card3: {
        elevation: 2,
        backgroundColor: '#dde0a9',
        maxWidth: 1200,
        height: 'auto',
        padding: 10

    },
    card4: {
        display: 'flex',
        elevation: 2,
        backgroundColor: '#e8e8d6',
        maxWidth: 1200,
        height: 'auto',
        padding: 10

    },
    bigAvatar: {
        width: 150,
        height: 150,
        margin: 10
    },
    adItem: {
        borderBottom: '1px solid #ddd',
        padding: 12,
        '&:last-child': {
            borderBottom: 'none'
        },
    },
    input: {
        marginRight: 8,
    },
    button: {
        fontSize: 17,
        borderRadius: 25,
        paddingBlock: 7,
        paddingInline: 30,
        display: 'block',
        spacing: 1
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        boxShadow: '0 0 3px 1px rgba(0, 0, 0, 0.1)',
        border: '1px solid #999',
        margin: 8
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    chip: {
        margin: 5,
        backgroundColor: '#EF6C00',
        color: '#fff'
    }
});

export default useStyles;