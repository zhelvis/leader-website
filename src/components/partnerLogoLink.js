import React from 'react'
import { makeStyles, ButtonBase, Tooltip, Typography } from '@material-ui/core'

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

const PartnerLogoLink = ({ title, children, ...props }) => {
  const classes = useStyles()

  return (
    <Tooltip title={<Typography variant="h6">{title}</Typography>}>
      <ButtonBase className={classes.root} {...props}>
        {children}
      </ButtonBase>
    </Tooltip>
  )
}

export default PartnerLogoLink
