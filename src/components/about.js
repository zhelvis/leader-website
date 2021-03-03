import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
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
    {
      teamImage: file(relativePath: { eq: "team.png" }) {
        childImageSharp {
          gatsbyImageData(width: 750, quality: 100, layout: CONSTRAINED)
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
          <GatsbyImage image={data.teamImage.childImageSharp.gatsbyImageData} />
        </Grid>
      </Grid>
    </Section>
  )
}

export default About
