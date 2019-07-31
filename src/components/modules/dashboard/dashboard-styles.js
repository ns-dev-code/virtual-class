import { makeStyles } from '@material-ui/styles'

const drawerWidth = 240;

const useStyles = makeStyles(theme=>({
    typography:{
        color:'black'
    },
    imageStyle:{
        width:'60%',
        cursor:'pointer'
    },
    link:{
        textDecoration:'blink',
        color:'#3F3D56'
    },
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
        [theme.breakpoints.down('sm')]:{
            marginRight:'0'
        }
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginTop:'3rem'
    },
   headerIcons:{
    width: '83%',
    display: 'flex',
    flexDirection: 'row-reverse',
    float: 'right',
    [theme.breakpoints.down('sm')]:{
        width:'50%'
    }
   },
   appsIcons:{
       display:'flex',
      [theme.breakpoints.down('sm')]:{
          display:'none'
      }
   },
   toolbar:{
       [theme.breakpoints.down('sm')]:{
           paddingRight:'0'
       }
   }
}))

export { useStyles }