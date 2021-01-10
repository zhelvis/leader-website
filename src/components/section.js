import React from 'react'
import clsx from 'clsx'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    scrollMarginTop: '64px',
    scrollSnapMarginTop: '64px',
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  title: {
    paddingBottom: theme.spacing(3),
  },
}))

const Section = ({ children, className, title, ...props }) => {
  const classes = useStyles()

  return (
    <div className={clsx(classes.root, className)} {...props}>
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
