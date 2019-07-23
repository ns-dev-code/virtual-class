import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import talent from "../images/talent.png"

const SiteMetaData = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

    console.log(data.site.siteMetadata)
    const { title, description} = data.site.siteMetadata
    return  (
        <Helmet defer={false} defaultTitle={title} titleTemplate={`%s | ${title}`}>
            <html lang="en" />
            <title>{title}</title>
            {/* <link rel="canonical" href={`${siteUrl}${pathname}`} /> */}
            <meta name="docsearch:version" content="2.0" />
            <meta name="Description" content={description}></meta>
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
            />
            <meta property="og:image" content={`${title}${talent}`} />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en" />
            <meta property="og:site_name" content={title} />
            <link
                rel="stylesheet"
                type="text/css"
                charset="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
        </Helmet>
    )
}
export default SiteMetaData
