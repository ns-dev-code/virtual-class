import React , { useEffect , useState } from 'react';
import { AppBar , Toolbar , Button , Fab , Box} from '@material-ui/core'
import { useStyles } from './main-header-style'
import talent from '../../../../images/talent-excel-logo.png'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../../../lang-switch'
import Img from 'gatsby-image';
import { navigate , StaticQuery , graphql } from 'gatsby'

import './header.css'

function Header(props){

    const { t } = useTranslation("translation")
    const handleClick = redirect => () =>{
       switch(redirect){
           case 'home':
                navigate('/');
            break;
            case 'login':
                navigate('/login');
            break;
            default: 
                navigate('/register');
            break;
       }
    }
    return(
        <React.Fragment>
           <StaticQuery
                query={graphql`
                   {
                    talentExcel:file(relativePath:{eq:"talent-excel-logo.png"})
                        {
                                childImageSharp{
                                fluid(maxWidth:1600){
                                        # srcSet
                                        ...GatsbyImageSharpFluid
                                }
                                }
                        }
                        # allFile(filter:{sourceInstanceName:{eq:"images"}}){
                        #     edges{
                        #     node{
                        #         relativePath
                        #         childImageSharp{
                        #         fluid(maxWidth:1600){
                        #                 srcSet
                        #         }
                        #         }
                        #     }
                        #     }
                        # }
                      }
                `}
                render={(data)=>(
                    <AppBar position="static" className="appBar" >
                        <Toolbar className="container">
                            <Box flexGrow={1} onClick={handleClick('home')}><Img fluid={data.talentExcel.childImageSharp.fluid} alt="Talent Excel" className="appbarImage" /></Box>
                            <Box className="signIn">
                                     <Fab 
                                        color="secondary"
                                        size="medium"
                                        variant="extended"
                                        className="joinNow"
                                        onClick={handleClick('login')}
                                    >
                                        Sign in
                                    </Fab>
                            </Box>
                         </Toolbar>
                    </AppBar>
                )}
           />
          
        </React.Fragment>
    )
}


export default Header


