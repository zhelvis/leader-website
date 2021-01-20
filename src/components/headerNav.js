import React from 'react'
import { makeStyles, Button } from '@material-ui/core'

import Anchor from './anchor'

import { paths } from '../config'

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}))

const HeaderNav = () => {
  const classes = useStyles()

  return (
    <nav className={classes.root}>
      {Object.entries(paths).map(([label, href], index) => (
        <Anchor key={index} href={href}>
          <Button>{label}</Button>
        </Anchor>
      ))}
    </nav>
  )
}

export default HeaderNav
