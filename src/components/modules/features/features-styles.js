import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
    text:{
        fontWeight:'larger',
        color:'#2F2E41',
    },
    featuresText:{
        color:'2F2E41',
        fontSize:'larger',
        fontWeight:'600'
    },
   
    jobDescription:{
        margin:'1.0rem'
    },
    applyButton:{
        backgroundColor:'#2E827D',
        color:'white',
        '&:hover':{
            color:'black'
        }
    },
    div:{
        margin:'auto',
        display:'table'
    }
}))

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay:true,
    speed: 5000,
    autoplaySpeed: 5000,
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
