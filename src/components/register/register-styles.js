import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    root: {
        width: "30%",
        margin: 'auto',
        padding: '20px',
        // boxShadow:'none',
        border: '1px solid #a69e9e',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: '1rem auto',
            boxShadow:'none',
            border:'none'
        }
    },
    text: {
        fontWeight: '600',
        marginBottom: '1rem',
        color: '#3F3D56'
    },
    textField: {
        margin: '1rem auto 1rem auto'
    },
    button: {
        backgroundColor: '#13a79f',
        margin: 'auto',
        width: '10rem',
        padding: '0.5rem',
        color: 'white',
        borderRadius: '2rem',
        cursor: 'pointer',
        [theme.breakpoints.up('md')]: {
            padding: '1.0rem !important'
        },
        '&:hover': {
            backgroundColor: '#b3d6d4',
            color: '#3F3D56'
        }
    },
    image: {
        width: '60%',
        margin: 'auto',
        display: 'table'
    },
    linkedin: {
        textAlign: 'center',
        padding: '15px'
    },
    linkedinButton: {
        width: '75%'
    },
    fabButton:{
        margin:'auto',
        display:'table'
    },
    alreadyMember:{
        margin:'20px 0 0 0'
    },
    signIn:{
        color:'#665ed0',
        cursor:'pointer'
    },
    select:{
        minWidth:'100%'
    }
}))

export { useStyles }