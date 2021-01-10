import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  title: {
    paddingBottom: theme.spacing(3),
  },
}))

const Section = ({ children, title, ...props }) => {
  const classes = useStyles()

  return (
    <div className={classes.root} {...props}>
      {title && (
        <Typography variant="h3" className={classes.title}>
          {title}
        </Typography>
      )}
      {children}
    </div>
  )
}

export default Section
