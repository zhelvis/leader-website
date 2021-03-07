import React from 'react'
import clsx from 'clsx'
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Container,
  useScrollTrigger 
} from '@material-ui/core'

import SideNav from './sideNav'
import HeaderNav from './headerNav'

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: 'none',
    transition: 'background 0.2s',
    background: 'transparent'
  },
  appBar_white: {
    background: 'white',
    borderBottom: '1px solid #dedede',
  },
  title: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(3),
  },
}))

const Header = () => {
  const classes = useStyles()

  const trigger = useScrollTrigger({
    target: typeof window !== 'undefined' ? window : undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  return (
    <AppBar
      position="fixed"
      className={trigger ? clsx(classes.appBar, classes.appBar_white) : classes.appBar}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <SideNav />
          <Typography className={classes.title} variant="h6">
            Leader
          </Typography>
          <HeaderNav />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
