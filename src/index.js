import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Helmet } from 'react-helmet'

import { MDXComponents } from './mdxComponents'
import Layout from './components/layout'

export const wrapRootElement = ({ element }) => {
  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{
          lang: 'ru',
        }}
      >
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <MDXProvider components={MDXComponents}>{element}</MDXProvider>
    </React.Fragment>
  )
}

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
