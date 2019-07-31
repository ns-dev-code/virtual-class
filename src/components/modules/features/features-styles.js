import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
    text:{
        fontWeight:'larger',
        color:'#2F2E41',
    },
    featuresText:{
        color:'#2F2E41',
        fontSize:'larger',
        fontWeight:'600'
    },
    viewDetails:{
      margin:'1.0rem'
    },
    jobDescription:{
        margin:'1.0rem',
        cursor:'pointer',
        height:'9rem'
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
        display:'table'
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
     margin:'10px !important',
     position:'relative'
   }
}))

const settings = {
    dots: false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay:false,
    autoplaySpeed: 2000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
export { useStyles , settings }
