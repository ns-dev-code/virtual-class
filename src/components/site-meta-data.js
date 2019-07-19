import React from 'react'
import { Helmet } from 'react-helmet'

const SiteMetaData = ({pathname}) =>{
    

    return(
        <Helmet  defer={false} defaultTitle={title} titleTemplate={`%s | ${title}`}>
            <html lang="en" />
            <link rel="canonical" href={`${siteUrl}${pathname}`} />
            <meta name="docsearch:version" content="2.0" />
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
            />
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Helmet>
    )
}
export default SiteMetaData
