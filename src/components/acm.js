import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Grid, Typography, makeStyles } from '@material-ui/core'

import Section from './section'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#dedeff', //theme.palette.background.paper,
  },
  title: {
    marginBottom: theme.spacing(6),
  },
  text: {
    fontSize: '1.125rem',
  },
}))

const Acm = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query {
      pcImage: file(relativePath: { eq: "pc.png" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Section className={classes.root} id="acm">
      <Grid spacing={3} container wrap="wrap-reverse">
        <Grid item md={6} sm={12} xs={12}>
          <Img fluid={data.pcImage.childImageSharp.fluid} />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Typography className={classes.title} variant="h4">
            Спортивное программирование
          </Typography>
          <Typography className={classes.text} paragraph>
            Мы помогаем в организации школ и клубов по спортивному
            программированию, проведении сборов для школьников и студентов, а
            также различных мероприятий с целью минимизация проблемы
            профориентации и трудоустройства молодёжи. Одной из основополагающих
            целей организация является создание условий для интеллектуального
            развития в сфере спортивного программирования, выявления и поддержки
            одарённых детей, вовлечения и формирования у детей и молодёжи
            мотивации к приобретению дополнительных навыков и знаний в области
            компьютерных наук.
          </Typography>
        </Grid>
      </Grid>
    </Section>
  )
}

export default Acm
