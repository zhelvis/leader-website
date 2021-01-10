import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import PartnerLogoLink from './partnerLogoLink'

const VolgaLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "volgaLogo.png" }) {
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
      title="Volga Camp"
      href="https://volgacamp.ru/"
      fixed={data.placeholderImage.childImageSharp.fixed}
    />
  )
}

export default VolgaLogo
