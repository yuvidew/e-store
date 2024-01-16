const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


const router = express.Router()

/* this the email sendener api */

router.post('/send' , (req, res) => {
    const {email , prodata} = req.body

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });
})