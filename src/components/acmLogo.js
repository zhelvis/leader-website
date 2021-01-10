import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import PartnerLogoLink from './partnerLogoLink'

const AcmLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "acmLogo.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <PartnerLogoLink
      title="ACM MISIS"
      href="http://acm.misis.ru/"
      fixed={data.placeholderImage.childImageSharp.fixed}
    />
  )
}

export default AcmLogo
