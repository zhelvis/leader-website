import React from 'react'

import { Grid, Typography, Link } from '@material-ui/core'

const Contacts = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6">Адрес</Typography>
        <Typography>
          <Link href="#">142409 г. Ногинск-9</Link>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Телефон</Typography>
        <Typography>
          <Link href="#">+7 (977) 117-75-63</Link>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Email</Typography>
        <Typography>
          <Link href="#">zhelvisvladimir@gmail.com</Link>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Contacts
