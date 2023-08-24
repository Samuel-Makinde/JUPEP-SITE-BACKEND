const nodemailer = require('nodemailer');
const nodeMailerConfig = require("../config/nodemailer")

const sendEmail = async ({ html, to, subject }) => {
    const transporter = nodemailer.createTransport(nodeMailerConfig)

    try {
        const info = await transporter.sendMail({
            from: `"EaseReads" <easereads@gmail.com>`,
            html,
            to,
            subject
        });

        console.log("Email sent:", info.response); // Logging successful sending
        return info;
    } catch (error) {
        console.error("Email sending failed:", error); // Logging sending error
        throw error;
    }
}

module.exports = sendEmail