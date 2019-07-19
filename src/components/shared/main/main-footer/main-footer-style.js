import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme=>({
    section:{
        margin:'1.0rem',
        [theme.breakpoints.down('xs')]:{
            margin:'auto'
        }
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
          paddingTop: theme.spacing(6),
          paddingBottom: theme.spacing(6),
        },
      },
}))

export { useStyles }