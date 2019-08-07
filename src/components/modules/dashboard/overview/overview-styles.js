import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    card: {
        width: '100%',
        borderRadius: '4px',
        margin: '1rem 0 10px 0',
        [theme.breakpoints.down('sm')]: {
            margin: '1rem 0 1rem 0',

        },
    },
    divIcon: {
        padding: '15px',
        display: 'flex'
    },
    iconImage: {
        minHeight: '64px',
        width: '50%',
    },
    cardActions: {
        paddingLeft: '1rem !important',
        paddingRight: '1rem !important',
    },
    typography: {
        color: '#a9a9a9'
    },
    cardContent: {
        cursor: 'pointer',
    },
    applications: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }

}))

export { useStyles }