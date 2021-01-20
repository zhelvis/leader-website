import React from 'react'
import { makeStyles, Typography, Link, Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 0),
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    height: 56, // fab height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="caption">
          © {new Date().getFullYear()} АНО ЦСИ "Лидер"
        </Typography>
        <Typography variant="caption">
          Разработка:{' '}
          <Link href="https://zhelvis.github.io/ru/">Владимир Жельвис</Link>
        </Typography>
      </Container>
    </div>
  )
}

export default Footer
