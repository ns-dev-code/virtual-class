import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    root: {
        width: "30%",
        margin: '2rem auto',
        padding: '20px',
        border:'1px solid #a69e9e',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: '1rem auto',
            boxShadow:'none',
            border:'none'
        }
    },
    notify:{
        margin: '0.5rem auto 0.5rem auto',
        color: 'white',
        /* background-color: red; */
        border: '1px solid #a7a7a7',
        padding: '0.5rem',
        borderRadius: '1rem',
        backgroundColor: '#D32F2F',
        boxShadow: '1px 1px 15px lightslategrey',
        fontSize:'0.875rem',
        // width:'15rem'
    },
    text: {
        fontWeight: '600',
        marginBottom: '0rem',
        color: '#3F3D56'
    },
    textField: {
        margin: '1rem auto 1rem auto'
    },
    button: {
        // backgroundColor: '#13a79f',
        // margin: 'auto',
        // width: '10rem',
        // padding: '0.5rem',
        // color: 'white',
        // borderRadius: '2rem',
        // cursor: 'pointer',
        // [theme.breakpoints.up('md')]: {
        //     padding: '1.0rem !important'
        // },
        // '&:hover': {
        //     backgroundColor: '#b3d6d4',
        //     color: '#3F3D56'
        // }
        margin:'auto',
        display:'table'
    },
    image: {
        width: '60%',
        margin: 'auto',
        display: 'table'
    },
    linkedin: {
        textAlign: 'center',
        padding: '15px',
        width:'4rem',
        margin:'auto',
        display:'table'
    },
    linkedinButton: {
        width: '75%'
    },
    forgotPassword: {
        color: ' #665ed0',
        cursor: 'pointer',
        margin: '24px 0 0 0'
    },
    new: {
        margin: '24px 0 0 0'
    },
    textColor: {
        color: '#665ed0',
        cursor: 'pointer'
    }
}))

export { useStyles }