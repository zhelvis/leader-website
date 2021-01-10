import React from 'react'

import { makeStyles, TextField, Button, Grid } from '@material-ui/core'

const useStyles = makeStyles({
  textfield: {
    width: '100%',
  },
})

const Form = () => {
  const classes = useStyles()

  return (
    <form noValidate autoComplete="off">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            className={classes.textfield}
            label="Имя"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            className={classes.textfield}
            label="Телефон"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.textfield}
            label="Введите сообщение"
            multiline
            rows={10}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Отправить заявку
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default Form
