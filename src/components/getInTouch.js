import React from 'react'

import { Grid, Typography, makeStyles } from '@material-ui/core'

import Section from './section'
import Contacts from './contacts'
import Form from './form'

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(6),
  },
}))

const GetInTouch = () => {
  const classes = useStyles()

  return (
    <Section id="contacts">
      <Typography className={classes.title} variant="h3">
        Связаться с нами
      </Typography>
      <Grid container spacing={3} wrap="wrap-reverse">
        <Grid item xs={12} md={8}>
          <Form />
        </Grid>
        <Grid item xs={12} md={4}>
          <Contacts />
        </Grid>
      </Grid>
    </Section>
  )
}

export default GetInTouch
