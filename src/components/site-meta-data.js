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

  const { title, description } = data.site.siteMetadata
  return (
    <Helmet defer={false} defaultTitle={title} titleTemplate={`%s | ${title}`}>
      <html lang="en" />
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <link rel="canonical" href={`${siteUrl}${pathname}`} /> */}
      <meta name="docsearch:version" content="2.0" />
      <meta name="Description" content={description}></meta>
      <meta property="og:image" content={`${title}${talent}`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en" />
      <meta property="og:site_name" content={title} />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
    </Helmet>
  )
}
export default SiteMetaData
