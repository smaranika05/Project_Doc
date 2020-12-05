const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "shishira.Rajk20",
    pass: "shishira123*",
  },
});

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
    to: "info@softsourced.de",
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
