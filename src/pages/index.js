import React from 'react'

import SEO from '../components/seo'
import Intro from '../components/intro'
import About from '../components/about'
import Acm from '../components/acm'
import Partners from '../components/partners'
import GetInTouch from '../components/getInTouch'

const IndexPage = () => {
  return (
    <React.Fragment>
      <SEO title="title" description="description" />
      <Intro />
      <About />
      <Acm />
      <Partners />
      <GetInTouch />
    </React.Fragment>
  )
}

export default IndexPage
