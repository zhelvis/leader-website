import React from 'react'
import { Tabs, Tab, makeStyles } from '@material-ui/core'
import { Link } from 'gatsby'

import { useLocation } from '@reach/router'

import { paths } from '../config'

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}))

const HeaderNav = () => {
  const { pathname } = useLocation()
  const classes = useStyles()

  return (
    <Tabs
      className={classes.root}
      aria-label="nav tabs"
      value={Object.values(paths).includes(pathname) ? pathname : false}
      indicatorColor="primary"
    >
      {Object.entries(paths).map(([label, to]) => (
        <Tab key={to} component={Link} value={to} to={to} label={label} />
      ))}
    </Tabs>
  )
}

export default HeaderNav
