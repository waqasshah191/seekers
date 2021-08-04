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
        background: '#FFFFCD',
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
        backgroundColor: '#EF6C00',
        color: '#fff'
    },

});

export default useStyles;