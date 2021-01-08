import React from 'react'
import { makeStyles, Toolbar, Fab } from '@material-ui/core'

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

import Header from './header'
import ScrollTop from './scrollTop'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Header />
        <main className={classes.content}>
          <Toolbar id="back-to-top-anchor" />
          {children}
        </main>
      </div>
      <ScrollTop>
        <Fab color="primary" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  )
}

export default Layout
