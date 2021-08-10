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
    teamList: {
        display: 'flex',
        alignItems: 'start',
    },
    team: {
        width: '25%',
        padding: 10,
        cursor: 'pointer',
    },
    teamImage: {
        width: '100%'
    },
    teamName: {
        fontSize: 28,
        fontWeight: 'bolder',
        color: '#333',
        paddingBlock: 5,
    },
    teamPos: {
        fontWeight: 'bold',
        color: '#666',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalClose: {
        width: 30,
        height: 30,
        marginLeft: 'auto',
        cursor: 'pointer',
    },
    modalContent: {
        backgroundColor: '#fff',
        width: 700,
        maxWidth: '95%',
        padding: 30,
        borderRadius: 5,
    },
    teamProfile: {
        display: 'flex',
        alignItems: 'start',
        marginBottom: 30,
    },
    teamProfileImg: {
        width: 120,
        height: 120,
        borderRadius: '50%',
        marginRight: 25,
        objectFit: 'cover',
    },
    teamProfileName: {
        fontSize: 35,
    },
    teamProfilePos: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
        color: '#666',
    },
    label: {
        display: 'block',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 8,
    },
    description: {
        fontWeight: '600',
        fontSize: 17,
        color: '#666',
        lineHeight: 2,
    }
}));

export default useStyles;