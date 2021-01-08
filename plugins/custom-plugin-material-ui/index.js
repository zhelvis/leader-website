import React from 'react'
import PropTypes from 'prop-types'

import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from './theme'

export const CustomThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

CustomThemeProvider.propTypes = {
  children: PropTypes.node,
}
