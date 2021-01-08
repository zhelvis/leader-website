import React from 'react'
import { CustomThemeProvider } from './index'

export const wrapRootElement = ({ element }) => {
  return <CustomThemeProvider>{element}</CustomThemeProvider>
}
