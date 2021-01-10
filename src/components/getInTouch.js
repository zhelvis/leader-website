import React from 'react'

import { Grid } from '@material-ui/core'

import Section from './section'
import Contacts from './contacts'
import Form from './form'

const GetInTouch = () => {
  return (
    <Section title="Связаться с нами">
      <Grid item xs={12}>
        <Grid container spacing={3} wrap="wrap-reverse">
          <Grid item xs={12} md={8}>
            <Form />
          </Grid>
          <Grid item xs={12} md={4}>
            <Contacts />
          </Grid>
        </Grid>
      </Grid>
    </Section>
  )
}

export default GetInTouch
