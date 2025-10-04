import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post("/contact", async (req, res) => {
  try {
    const data = await sendEmail(req.body);

    res.send(data);

    console.log("The message has been sent 🎉");
  } catch (err) {
    res.status(500).send(err);

    console.log("Error while sending 🪲. Error:" + err.message);
  }
});

//Function that sends email - returns Promise (transporter.sendMail returns Promise)
function sendEmail({ firstName, lastName, email, phone, message }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
    //Allows TLS connections even when the certificate is unverified (not recommended for production)
    tls: {
      rejectUnauthorized: false,
    },
  });

  //Configures the email content
  const data = transporter.sendMail({
    from: process.env.USER,
    to: email,
    subject: "DJ Matthew",
    text: `Thank you for contacting me!
I’ll be back in touch with you very soon.

Your message:
First name: ${firstName}
Last name: ${lastName}
Email: ${email}
Phone: ${phone}
Message: ${message}`,
  });

  return data;
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

