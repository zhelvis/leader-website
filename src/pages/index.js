import React from 'react'

import SEO from '../components/seo'

import Partners from '../components/partners'
import GetInTouch from '../components/getInTouch'

const IndexPage = () => {
  return (
    <React.Fragment>
      <SEO title="title" description="description" />
      <Partners />
      <GetInTouch />
    </React.Fragment>
  )
}

export default IndexPage
