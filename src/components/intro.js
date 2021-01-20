import React from 'react'
import { Typography, makeStyles, Toolbar } from '@material-ui/core'

import Section from './section'
import ScrollDown from './scrollDown'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
  },
  section: {
    flex: 1,
  },
  action: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: theme.spacing(6),
  },
  title: {
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(6),
  },
  subtitle: {
    marginBottom: theme.spacing(3),
  },
}))

const Intro = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Toolbar id="back-to-top-anchor" />
      <Section className={classes.section}>
        <Typography align="center" className={classes.title} variant="h1">
          Leader
        </Typography>
        <Typography align="center" className={classes.subtitle} variant="h2">
          Развитие и популяризация спорта
        </Typography>
      </Section>
      <div className={classes.action}>
        <ScrollDown />
      </div>
    </div>
  )
}

export default Intro
