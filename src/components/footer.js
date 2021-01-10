import React from 'react'
import { makeStyles, Typography, Link } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  container: {
    height: 56,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant="caption">
          © {new Date().getFullYear()} АНО ЦСИ "Лидер"
        </Typography>
        <Typography variant="caption">
          Разработка:{' '}
          <Link href="https://zhelvis.github.io/ru/">Владимир Жельвис</Link>
        </Typography>
      </div>
    </div>
  )
}

export default Footer
