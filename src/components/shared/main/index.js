import React from 'react'
import Header from './main-header'
import Footer from './main-footer'

function Main(props){

    return(
        <React.Fragment>
            <Header />
            {props.children}
                 <Footer/>
        </React.Fragment>
    )
}
export default Main