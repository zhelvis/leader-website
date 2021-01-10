import React from 'react'

import { Grid, makeStyles } from '@material-ui/core'

import RtSoftLogo from './rtSoftLogo'
import AcmLogo from './acmLogo'
import VolgaLogo from './volgaLogo'
import Section from './section'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}))

const Partners = () => {
  const classes = useStyles()
  return (
    <Section className={classes.root} id="partners" title="Партнёры">
      <Grid container justify="space-around" alignItems="center">
        <Grid item>
          <RtSoftLogo />
        </Grid>
        <Grid item>
          <AcmLogo />
        </Grid>
        <Grid item>
          <VolgaLogo />
        </Grid>
      </Grid>
    </Section>
  )
}

export default Partners
