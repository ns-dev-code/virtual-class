import React from 'react'
import Header from './main-header'
import Footer from './main-footer'
import Animation from '../../animate/animate-aos'

function Main(props){

    return(
        <React.Fragment>
            <Header />
            {props.children}
            <Animation direction="fade-up">
                 <Footer/>
            </Animation>
        </React.Fragment>
    )
}
export default Main