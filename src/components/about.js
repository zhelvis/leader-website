import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Grid, Typography, makeStyles } from '@material-ui/core'

import Section from './section'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    marginBottom: theme.spacing(6),
  },
  text: {
    fontSize: '1.125rem',
  },
}))

const About = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query {
      teamImage: file(relativePath: { eq: "team.png" }) {
        childImageSharp {
          fluid(maxWidth: 750, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Section id="about">
      <Grid spacing={3} container>
        <Grid item md={6} sm={12} xs={12}>
          <Typography className={classes.title} variant="h3">
            О нас
          </Typography>
          <Typography className={classes.text} paragraph>
            Автономная некоммерческая организация "Центр спортивной интеграции
            "ЛИДЕР" создана в 2017 году для проведения и содействия проведению
            чемпионатов, соревнований, турниров, олимпиад, спортивно-массовых
            мероприятий, дружеских встреч, как традиционных видов спорта, так и
            видов, составляющих культурное наследие народов России, Казахстана,
            стран Евразийского сотрудничества.
          </Typography>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Img fluid={data.teamImage.childImageSharp.fluid} />
        </Grid>
      </Grid>
    </Section>
  )
}

export default About
