import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme=>({
    root:{
        width:'100%',
        padding:'0.5rem',
       
    },
    tableActions:{
        margin:'0.5rem',
        cursor:'pointer'
    }
}))
export { useStyles }