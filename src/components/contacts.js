import React from 'react'

import { Grid, Typography, Link } from '@material-ui/core'

import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'

const Contacts = () => {
  const contacts = [
    {
      Icon: LocationOnIcon,
      title: 'Адрес',
      text: '105077 г. Москва ул. Парковая 13-я, д. 20, 5',
      href: 'https://goo.gl/maps/bJdGWBps8mTcUEWK6',
    },
    {
      Icon: PhoneIcon,
      title: 'Телефон',
      text: '+7 495 003 24 54',
      href: 'tel:+74950032454',
    },
    {
      Icon: AlternateEmailIcon,
      title: 'Email',
      text: 'lider-sport2017@mail.ru',
      href: 'mailto:lider-sport2017@mail.ru ',
    },
  ]

  return (
    <Grid container spacing={3}>
      {contacts.map(({ Icon, title, text, href }, i) => (
        <Grid xs={12} item key={i}>
          <Icon aria-hidden={true} />
          <Typography variant="h6">{title}</Typography>
          <Typography>
            <Link href={href}>{text}</Link>
          </Typography>
        </Grid>
      ))}
    </Grid>
  )
}

export default Contacts
