import React from 'react'
export { wrapPageElement, wrapRootElement } from './src'

export const onClientEntry = () => {
  if (process.env.NODE_ENV !== 'production') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render')
    console.log('kek')
    whyDidYouRender(React, {
      trackAllPureComponents: true,
    })
  }
}
