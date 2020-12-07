const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const oauth2Client = new OAuth2(
  "334223947302-fejcs001663k3hg2tdrqmqdd85711ma8.apps.googleusercontent.com", // ClientID
  "LL8jGKLtf4iSmLQPxdPhriuh", // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token:
    "1//04GpvZGrYsN1MCgYIARAAGAQSNwF-L9IrtXKXbI9eqOMg3yDkCKXtI_yVv-GwhZib7sESoMbTlzvSdORx_Ffkr6bGVb5ZvroXel0",
});
const accessToken = oauth2Client.getAccessToken();

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "praxiswebsite.de@gmail.com",
    clientId:
      "334223947302-fejcs001663k3hg2tdrqmqdd85711ma8.apps.googleusercontent.com",
    clientSecret: "LL8jGKLtf4iSmLQPxdPhriuh",
    refreshToken:
      "1//04GpvZGrYsN1MCgYIARAAGAQSNwF-L9IrtXKXbI9eqOMg3yDkCKXtI_yVv-GwhZib7sESoMbTlzvSdORx_Ffkr6bGVb5ZvroXel0",
    accessToken: accessToken,
  },
});

tls: {
  rejectUnauthorized: false;
}

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const number = req.body.number;
  const radio = req.body.radio;
  const slide1 = req.body.slide1;
  const slide2 = req.body.slide2;
  const slide3 = req.body.slide3;
  const mail = {
    from: name,
    to: "shishirahere@gmail.com",
    subject: "Email from Praxis Website",
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Number: ${number}</p><p>Message: ${message}</p><p>Package:${radio}</p><p>Ich möchte die Inhalte der Webseite in Zukunft selber pflegen: ${slide1}</p><p>Ich benötige Ihre Unterstützung bei der Erstellung der Rechtstexte: ${slide2}</p><p>Ich benötige Unterstützung bei der Erstellung der Bildsprache und Texte: ${slide3}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "failed" });
    } else {
      res.json({ status: "sent" });
    }
  });
});

// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/", router);
// app.listen(5000, () => console.log("Server Running"));

// const contactEmail = nodemailer.createTransport({
//   host: "mail.softsourced.de",
//   port: 465,
//   // port: <465/993/995>, //any one
//   requireTLS: true,
//   secure: true,
//   auth: {
//     user: "dummy@softsourced.de",
//     pass: "Simple2020!",
//   },
//   tls: {
//     ciphers: "SSLv3",
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });

// router.post("/contact", (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const message = req.body.message;
//   const number = req.body.number;
//   const radio = req.body.radio;
//   const slide1 = req.body.slide1;
//   const slide2 = req.body.slide2;
//   const slide3 = req.body.slide3;
//   const mail = {
//     from: name,
//     to: "info@softsourced.de",
//     subject: "Email from Praxis Website",
//     html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Number: ${number}</p><p>Message: ${message}</p><p>Package:${radio}</p><p>Ich möchte die Inhalte der Webseite in Zukunft selber pflegen: ${slide1}</p><p>Ich benötige Ihre Unterstützung bei der Erstellung der Rechtstexte: ${slide2}</p><p>Ich benötige Unterstützung bei der Erstellung der Bildsprache und Texte: ${slide3}</p>`,
//   };
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json({ status: "failed" });
//     } else {
//       res.json({ status: "sent" });
//     }
//   });
// });
