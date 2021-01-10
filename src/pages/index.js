import React from 'react'

import { Typography } from '@material-ui/core'

import Image from '../components/image'
import SEO from '../components/seo'
import Section from '../components/section'
import GetInTouch from '../components/getInTouch'

const IndexPage = () => {
  return (
    <React.Fragment>
      <SEO title="title" description="description" />
      <h1>Hello</h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Section title="Партнёры">
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed
          porttitor ante. Integer vitae odio id ipsum sodales sollicitudin eget
          non odio. Vivamus vestibulum id tortor sit amet ultricies. Integer
          tempus augue est, eget sollicitudin dui porttitor eget. Donec
          condimentum bibendum ex ac pharetra. Aliquam sapien lectus, viverra eu
          ornare at, egestas sed metus. In hac habitasse platea dictumst. Sed
          congue odio nec lorem suscipit cursus. Aliquam scelerisque justo eu
          nisi gravida, eget auctor dui vestibulum. In hac habitasse platea
          dictumst. Praesent a est eget odio consectetur dictum. Fusce quis
          justo ut eros facilisis facilisis vel vitae nibh. Donec elementum est
          in consectetur malesuada. Suspendisse potenti. Aliquam id ante
          porttitor, commodo tellus eu, facilisis massa. Pellentesque vitae dui
          nec leo tempus condimentum. Suspendisse porttitor nulla non ipsum
          sagittis blandit.
        </Typography>
      </Section>
      <GetInTouch />
    </React.Fragment>
  )
}

export default IndexPage
