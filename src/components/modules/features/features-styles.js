import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
    text:{
        fontWeight:'larger',
        color:'#2F2E41',
    },
    featuresText:{
        color:'#2F2E41',
        fontSize:'larger',
        fontWeight:'600',
    },
    viewDetails:{
      margin:'1.0rem'
    },
    jobDescription:{
        margin:'1.0rem',
        cursor:'pointer',
        height:'6rem'
    },
    applyButton:{
        backgroundColor:'#2E827D',
        color:'white',
        '&hover':{
          backgroundColor:'#2E827D',
          color:'white'
        }
    },
    div:{
        margin:'auto',
        display:'table',
      
    },
   slider:{
     margin:'1.0rem'
   },
   contentHead:{
     height:'3rem'
   },
   container:{
       [theme.breakpoints.up('xl')]:{
         width:'80% !important',
       },
      
   },
   contentext:{
    fontSize:'x-large',
    
   },
   card:{
    //  margin:'10px !important',
    //  position:'relative',
    width:'248px !important',
    border:'1px solid #c5eae8',
    [theme.breakpoints.down('md')]:{
      width:'200px !important',
      marginLeft:'20px !important',
      marginRight:'20px !important'
    },
    [theme.breakpoints.down('sm')]:{
      width:'190px !important',
      marginLeft:'20px !important',
      marginRight:'20px !important'
    },
    [theme.breakpoints.down('xs')]:{
      width:'200px !important',
      marginLeft:'20px !important',
      marginRight:'20px !important'
    }
   },
   icons:{
     height:20,
     width:20
   },
   borderBottom:{
    // borderBottom: '1px solid #78bcb8 !important',
    // borderBlockEndWidth: 'initial !important',
    backgroundColor:'#78bcb8',
    margin:'15px auto 15px auto',
    width:'40px',
    height:'4px'
   },
   contentHead:{
    
    
   }
}))

const settings = {
    className:"center",
    centerMode:true,
    dots: false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide:1
        }
      }
    ]
  };
export { useStyles , settings }
