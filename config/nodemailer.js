module.exports = {
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    tls: {
        rejectUnauthorized: false,
        minVersion: "TLSv1.2"
    }, // upgrade later with STARTTLS
    auth: {
        user: "makindesamuel1999@gmail.com",
        pass: "elyhzvmwgbspkqdc",
    },
}