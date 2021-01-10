import React from 'react'
import { makeStyles, ButtonBase, Tooltip, Typography } from '@material-ui/core'
import Img from 'gatsby-image'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 150,
    height: 150,
    borderRadius: '50%',
    display: 'flex',
    justifyItems: 'center',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))

const PartnerLogoLink = ({ fixed, title, children, ...props }) => {
  const classes = useStyles()

  return (
    <Tooltip title={<Typography variant="h6">{title}</Typography>}>
      <ButtonBase className={classes.root} {...props}>
        {fixed && <Img fixed={fixed} />}
        {children && children}
      </ButtonBase>
    </Tooltip>
  )
}

export default PartnerLogoLink
