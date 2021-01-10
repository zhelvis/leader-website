import React from 'react'
import { makeStyles, AppBar, Toolbar, Typography } from '@material-ui/core'

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

  return (
    <AppBar
      variant="outlined"
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
