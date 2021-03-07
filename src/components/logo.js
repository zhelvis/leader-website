import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    primary: {
        fill: theme.palette.primary.main,
        fillOpacity: 1
    },
    secondory: {
        fill: theme.palette.secondary.main,
        fillOpacity: 1
    },
    third: {
        fill: '#54A2F7',
        fillOpacity: 1
    },
}))

// width="157.0877" height="75.6598" x="383" y="288.1701"

const Logo = props => {

    const classes = useStyles()

    return (
        <svg {...props} preserveAspectRatio="none" viewBox="19.974063873291016 61.42500305175781 160.02593994140625 77.07499694824219">
            <g transform="matrix(1 0 0 1 0 0)" >
                <g>
                    <path className={classes.secondory} d="M26.9 138.5h4.8l74.1-69.1-6.5-6.1c-2.7-2.5-6.8-2.5-9.4 0l-67.7 63.1c-4.6 4.3-1.6 12.1 4.7 12.1z" ></path>
                    <path className={classes.primary} d="M138 138.2c1.5 0 1.8-.8.7-1.8l-15.3-14.3c-1.1-1-2.8-1-3.9 0l-15.3 14.3c-1.1 1-.8 1.8.7 1.8H138z" ></path>
                    <path className={classes.primary} d="M57.3 138.5l61.3-57.2-12.8-11.9-74.1 69.1h25.6z"></path>
                    <path className={classes.third} d="M80.9 138.5c1.8 0 3.4-.7 4.7-1.9l27.4-25.5c2.7-2.5 6.8-2.5 9.4 0l27.4 25.5c1.3 1.2 3 1.9 4.7 1.9H180l-61.3-57.2-61.3 57.2h23.5z"></path>
                </g>
            </g>
        </svg>
    )
}

export default Logo
