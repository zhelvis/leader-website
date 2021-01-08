import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'

const SecondPage = () => {
  return (
    <React.Fragment>
      <SEO title="second" description="second page" />
      <h1>Hello from second page</h1>
      <Link to="/">Go home</Link>
    </React.Fragment>
  )
}

export default SecondPage
