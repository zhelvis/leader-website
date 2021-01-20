import React from 'react'
import { makeStyles, Zoom, useScrollTrigger } from '@material-ui/core'

import Anchor from './anchor'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
}))

const ScrollTop = ({ children }) => {
  const classes = useStyles()

  const trigger = useScrollTrigger({
    target: typeof window !== 'undefined' ? window : undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  return (
    <Zoom in={trigger}>
      <Anchor className={classes.root} href="#back-to-top-anchor">
        {children}
      </Anchor>
    </Zoom>
  )
}

export default ScrollTop
