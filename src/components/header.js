import React from 'react'
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Container,
} from '@material-ui/core'

import SideNav from './sideNav'
import HeaderNav from './headerNav'

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    marginRight: theme.spacing(3),
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
