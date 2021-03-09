const express = require('express')
const Joi = require('joi');
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

const { mailAuth } = require('./secret')

const PORT = 8081
const ADDRESSEE = 'lider-sport2017@mail.ru'

const transporter = nodemailer.createTransport({
  host: 'smtp.yandex.com',
  port: 465,
  secure: true,
  auth: mailAuth,
})

const validateFormData = (data) => Joi.object({
    name: Joi.string().allow(''),
    phone: Joi.string().required(),
    message: Joi.string().allow('')
}).validate(data)

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json({ extended: true }))

app.post('/feedback', async (req, res) => {
  try {

    const { error, value } = validateFormData(req.body)

    if (error){
        console.log(error)
        res.status(400).end()
        return
    }

    const { name, phone, message } = value


    await transporter.sendMail({
      from: 'war1lok@yandex.ru',
      to: ADDRESSEE,
      subject: 'Заявка с сайта leader-sport',
      html: `
          <p>Телефон: ${phone}</p>
          ${!!name ? `<p>Имя: ${name}</p>` : ''}
          ${!!message ? `<p>Сообщение:</p><p>${message}</p>` : ''}
      `,
    })

    res.end()

  } catch (e) {
    console.log(e)
    res.status(500).end()
  }
})

app.listen(PORT, () => {
  console.log(`app started at port ${PORT}`)
})
