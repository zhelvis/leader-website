import React from 'react'
import clsx from 'clsx'
import { makeStyles, Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    scrollMarginTop: '56px',
    padding: theme.spacing(6, 0),
  },
}))

const Section = ({ children, className, ...props }) => {
  const classes = useStyles()

  return (
    <div className={clsx(classes.root, className)} {...props}>
      <Container maxWidth="lg">{children}</Container>
    </div>
  )
}

export default Section
