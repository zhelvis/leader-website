import React from 'react'
import { Helmet } from 'react-helmet'
import { SnackbarProvider } from 'notistack'
import { Fade } from '@material-ui/core'

import Layout from './components/layout'

export const wrapRootElement = ({ element }) => {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      TransitionComponent={Fade}
    >
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
      {element}
    </SnackbarProvider>
  )
}

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
