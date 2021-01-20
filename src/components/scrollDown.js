import React from 'react'
import { makeStyles, IconButton, SvgIcon } from '@material-ui/core'

import Anchor from './anchor'

const useStyles = makeStyles((theme) => ({
  mouse: {
    opacity: 1,
    fillOpacity: 0,
    stroke: 'currentColor',
    strokeWidth: 4,
    strokeOpacity: 1,
  },
  wheel: {
    opacity: 1,
    fill: 'currentColor',
    fillOpacity: 1,
    animation: `$wheel 2s ease-out infinite`,
  },
  '@keyframes wheel': {
    '0%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
    '25%': {
      opacity: 1,
    },
    '75%': {
      transform: 'translateY(.75em)',
      opacity: 0,
    },
    '100%': {
      transform: 'translateY(0)',
      opacity: 0,
    },
  },
}))

const ScrollDownIcon = (props) => {
  const classes = useStyles()

  return (
    <SvgIcon {...props} viewBox="198 358 45 75">
      <path
        className={classes.mouse}
        d="M230 360C235.52 360 240 364.48 240 370C240 382 240 408 240 420C240 425.52 235.52 430 230 430C224 430 216 430 210 430C204.48 430 200 425.52 200 420C200 408 200 382 200 370C200 364.48 204.48 360 210 360C216 360 224 360 230 360Z"
      ></path>
      <path
        className={classes.wheel}
        d="M220 368.35C221.24 368.35 222.25 369.35 222.25 370.6C222.25 373.15 222.25 378.55 222.25 381.1C222.25 382.34 221.24 383.35 220 383.35C219.55 383.35 220.45 383.35 220 383.35C218.76 383.35 217.75 382.34 217.75 381.1C217.75 378.55 217.75 373.15 217.75 370.6C217.75 369.35 218.76 368.35 220 368.35C220.45 368.35 219.55 368.35 220 368.35Z"
      ></path>
    </SvgIcon>
  )
}

const ScrollDown = () => {
  return (
    <Anchor href="#about">
      <IconButton color="primary">
        <ScrollDownIcon />
      </IconButton>
    </Anchor>
  )
}

export default ScrollDown
