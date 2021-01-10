import React from 'react'
import { makeStyles, Toolbar, Fab } from '@material-ui/core'

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

import Header from './header'
import Footer from './footer'
import ScrollTop from './scrollTop'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flexGrow: 1,
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
        <Footer />
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
