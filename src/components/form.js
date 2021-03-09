import React from 'react'
import { useSnackbar } from 'notistack';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios'

import { makeStyles, TextField, Button, Grid } from '@material-ui/core'

const validationSchema = yup.object({
  name: yup.string(),
  phone: yup.string().required('Необходимо указать телефон'),
  message: yup.string()
});

const useStyles = makeStyles((theme) => ({
  textfield: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}))

const Form = () => {
  const classes = useStyles()

  const { enqueueSnackbar } = useSnackbar();

  const formik = useFormik({
    initialValues: { name: "", phone: "", message: "" },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try{
        await axios.post('/feedback', values)

        enqueueSnackbar(`Ваша заявка успешно отправлена`,{ 
          variant: 'success',
        });
  
        resetForm()
      }catch(e){
        enqueueSnackbar(`Произошла ошибка при отправке запроса`,{ 
          variant: 'error',
        });
      }
    },
  });

  return (
    <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            className={classes.textfield}
            id="name"
            name="name"
            label="Имя"
            variant="outlined"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            className={classes.textfield}
            id="phone"
            name="phone"
            label="Телефон"
            variant="outlined"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
            InputLabelProps={{ required: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.textfield}
            id="message"
            name="message"
            label="Введите сообщение"
            multiline
            rows={8}
            variant="outlined"
            value={formik.values.message}
            onChange={formik.handleChange}
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
