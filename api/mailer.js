import nodemailer from 'nodemailer';

const from = '"Bookworm" <info@bookworm.com>'

function setup() {
    return nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    })
}

export function sendContactForm(data) {
    const tranport = setup();
    const email = {
        from,
        to: "lessonryan@gmail.com",
        subject: "Welcome to",
        text: `
        Name: ${data.firstName} ${data.lastName}
        Email:  ${data.email}
        Comment: ${data.comment}
      `
    };

    tranport.sendMail(email);
}