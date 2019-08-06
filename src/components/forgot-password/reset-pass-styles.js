import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme=>({
    title:{
        margin:'30px 0 30px 0'
    },
    display:{
        display:'flex',
        margin:'30px 0 30px 0'
    },
    buttons:{
        margin:'0 0 0 20px',
       
    },
    text:{
        padding:'0.8rem'
    },
    cancelButton:{
        backgroundColor: '#fff',
        border: '2px solid #13a59d',
        color: '#066d66',
    }
}))

export { useStyles }