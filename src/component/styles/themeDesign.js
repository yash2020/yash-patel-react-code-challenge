import { makeStyles } from "@material-ui/core";
// import { colors } from "@material-ui/core";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        marginTop: 10,
        marginBottom: 10,
    },
    appBar: {
        background: 'linear-gradient(175deg, #f3a91c 30%, #f8cc6a 90%)',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: 36
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap"
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1
        }
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(2)
    },
    //Home Card Design.
    homeCardRoot: {
        background: '#cbf27e',
        marginBottom: 10,
        marginRight: 10
    },
    hoameCardTitle: {
        fontSize: 24,
        width: '100%',
        
    },
    homeCardBody: {
        minHeight: 200,
        maxHeight: 200,
        overflowY: 'ellipsis',
        paddingBottom: 5
    },
    homeCardPos: {
        marginBottom: 12,
    },
    homeAddPostBtn: {
        marginBottom: 15,
        float: 'right',
    },
   
    postSearchDiv: {
        maxWidth: '50vw',
        margin: '0 auto',
        marginBottom: 10,
    },
    formRoot: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '60ch',
        },
    },
    ///for Modal
    modal: {
        justifyContent: 'center',
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #7F7F7F',
        padding: '20px',
        borderRadius: '15px',
        maxWidth: '60vw',
        maxHeight: '70vh',
        boxShadow: '0 3px 15px - 3px rgba(0, 0, 0, 0.2)',
    },
    searchBtn: {
        height: '100%',
        fontSize: 24,
    },
    postCard: {
        maxWidth: '70vw',
        float: 'center',
        margin: '0 auto',
        overflowY: 'ellipsis',
        marginTop: 15,
    },
    postCardCntry:{
        float:'right'
    },
    postCardBody:{
        marginTop: 10
    },

    ///This is classes for instutaion card.
    citySelect:{
        maxWidth: 200,
        marginBottom:5
    },
    univerCardRoot: {
        background: '#fff36b',
        marginBottom: 10,
        marginRight: 10
    },
    univerCardLocation: {
        fontSize: 14,
    }, 
    univerCardBody: {
        fontSize: 18,
        minHeight: 100,
        maxHeight: 100,
        overflowY: 'ellipsis',
    },
    univerDomainli: {
        fontSize: 16,
    }

}));


export default useStyles;