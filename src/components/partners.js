import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'

import { Grid, makeStyles, Typography } from '@material-ui/core'

import RtSoftLogo from './rtSoftLogo'

import Section from './section'
import PartnerLogoLink from './partnerLogoLink'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('xs')]: {
      textAlign: 'left',
    },
  },
}))

const Partners = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query {
      volgaCampImage: file(relativePath: { eq: "volgaCamp.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      acmMisisImage: file(relativePath: { eq: "acmMisis.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Section className={classes.root} id="partners">
      <Typography className={classes.title} variant="h3">
        Партнёры
      </Typography>
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid item>
          <PartnerLogoLink href="https://www.rtsoft.ru/" title="ГК «РТСофт»">
            <RtSoftLogo />
          </PartnerLogoLink>
        </Grid>
        <Grid item>
          <PartnerLogoLink href="http://acm.misis.ru/" title="ACM MISIS">
            <Img fixed={data.acmMisisImage.childImageSharp.fixed} />
          </PartnerLogoLink>
        </Grid>
        <Grid item>
          <PartnerLogoLink href="https://volgacamp.ru/" title="Volga Camp">
            <Img fixed={data.volgaCampImage.childImageSharp.fixed} />
          </PartnerLogoLink>
        </Grid>
      </Grid>
    </Section>
  )
}

export default Partners
