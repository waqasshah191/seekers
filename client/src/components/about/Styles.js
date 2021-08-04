import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      alignItems: 'start',
    },
    imageWrapper: {
        width: '100%',
        padding: 16,
    },
    image: {
        width: '100%',
        borderRadius: 7,
    },
    content: {
        width: '100%',
        padding: 16,
    },
    contentText: {
        fontSize: 18,
        marginBlock: 16,
        lineHeight: 1.6,
    },
    tabHead: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 16
    },
    question: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 5
    }
}));

export default useStyles;