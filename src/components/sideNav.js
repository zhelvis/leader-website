import React from 'react'
import { Link } from 'gatsby'

import {
  makeStyles,
  IconButton,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'

import { paths } from '../config'

const useStyles = makeStyles((theme) => ({
  iconButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawer: {
    width: '18em',
    flexShrink: 0,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: '18em',
  },
  drawerContainer: {
    overflow: 'auto',
  },
  navlink: {
    '&[aria-current="page"]': {
      backgroundColor: theme.palette.action.selected,
    },
  },
}))

const SideNav = () => {
  const [open, setOpen] = React.useState(false)
  const classes = useStyles()

  const toogleDrawer = () => setOpen(!open)

  return (
    <React.Fragment>
      <IconButton
        edge="start"
        color="inherit"
        className={classes.iconButton}
        aria-label="toogle sidenav"
        onClick={toogleDrawer}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        className={classes.drawer}
        variant="temporary"
        open={open}
        onClose={toogleDrawer}
        PaperProps={{ classes: { root: classes.drawerPaper } }}
      >
        <Toolbar />
        <nav className={classes.drawerContainer}>
          <List onClick={toogleDrawer}>
            {Object.entries(paths).map(([label, to]) => (
              <li key={to}>
                <ListItem
                  className={classes.navlink}
                  button
                  disableRipple
                  component={Link}
                  to={to}
                >
                  <ListItemText primary={label} />
                </ListItem>
              </li>
            ))}
          </List>
        </nav>
      </Drawer>
    </React.Fragment>
  )
}

export default SideNav
