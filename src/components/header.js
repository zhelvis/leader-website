import React from 'react'
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@material-ui/core'

import SideNav from './sideNav'
import HeaderNav from './headerNav'

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    marginRight: theme.spacing(8),
  },
}))

const Header = () => {
  const classes = useStyles()

  const headerTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: typeof window !== 'undefined' ? window : undefined,
  })

  return (
    <AppBar
      elevation={headerTrigger ? 4 : 0}
      position="fixed"
      color="inherit"
      className={classes.appBar}
    >
      <Toolbar>
        <SideNav />
        <Typography className={classes.title} variant="h6">
          Leader
        </Typography>
        <HeaderNav />
      </Toolbar>
    </AppBar>
  )
}

export default Header
