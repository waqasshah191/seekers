import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    button: {
        fontWeight: 'bold',
        fontSize: 15,
        borderRadius: 25,
        paddingBlock: 12,
        paddingInline: 30,
        minWidth: 'auto',
        "& span": {
            marginLeft: 0,
        }
    },
    form: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        width: '100|%',
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        boxShadow: '0 0 3px 1px rgba(0, 0, 0, 0.1)',
        border: '1px solid #999',
        margin: 8
    },
    sidebar: {
        display: 'flex',
        flexDirection: 'column',
        width: 300,
        backgroundColor: '#f7f7f7',
        paddingInline: 10,
        borderRight: '1px solid #ccc',
    },
    sidebarTabs: {
        display: 'flex',
        flexWrap: 'nowrap',
        '& > .nav-item': {
            fontSize: 16,
            fontWeight: 'bold',
            display: 'block',
            width: '100%',
            textAlign: 'center',
        }
    },
    sidebarList: {
        '& > .list-group-item': {
            fontSize: 16,
            fontWeight: 'bold',
            display: 'block',
            width: '100%',
            paddingBlock: 8,
        }
    }
});

export default useStyles;