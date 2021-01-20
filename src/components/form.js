import React from 'react'

import { makeStyles, TextField, Button, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  textfield: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}))

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
            rows={8}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            size="large"
            variant="contained"
            color="primary"
            type="submit"
          >
            Отправить заявку
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default Form
