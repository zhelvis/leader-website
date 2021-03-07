import React from 'react'
import { Typography, makeStyles, Toolbar, Button } from '@material-ui/core'


import ScrollDown from './scrollDown'
import Logo from './logo'
import Anchor from './anchor'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: theme.palette.background.paper,
    background: `linear-gradient(45deg, rgba(147,220,255,0.2528361686471463) 0%, rgba(84,162,247,0.24723392775078779) 100%)`,
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    display: 'grid',
    gap: theme.spacing(1),
    gridTemplateColumns: '1fr 1fr',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr'
    },
  },
  button: {
    width: '100%',
  },
  action: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: theme.spacing(6),
  },
  title: {
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(3),

  },
  titleContainer: {
    display: 'flex',
    alignItems: 'baseline',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      flexDirection: 'column'
    },
  },
  subtitle: {
    marginBottom: theme.spacing(6),
  },
  logo: {
    height: '6rem',
    width: 'auto',
    marginRight: '1rem',
    [theme.breakpoints.down('sm')]: {
      height: '5rem',
      marginRight: 0,
    },
    [theme.breakpoints.down('xs')]: {
      height: '4rem',
    },
  }
}))

const Intro = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Toolbar id="back-to-top-anchor" />
      <div className={classes.content}>
        <div className={classes.titleContainer}>
          <Logo className={classes.logo} />
          <Typography className={classes.title} variant="h1">
            Leader
          </Typography>
        </div>
        <Typography align="center" className={classes.subtitle} variant="h5">
          Развитие и популяризация спорта
        </Typography>
        <div className={classes.buttonContainer}>
          <Anchor href="#about" >
            <Button color="primary" className={classes.button} variant="contained" size="large">
              О нас
            </Button>
          </Anchor>
          <Anchor href="#contacts">
          <Button color="primary" className={classes.button} variant="contained" size="large">
            Контакты
            </Button>
          </Anchor>
          
        </div>
      </div>
      <div className={classes.action}>
        <ScrollDown />
      </div>
    </div>
  )
}

export default Intro
