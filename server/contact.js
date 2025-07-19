import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); //Loads environment variables from the .env file

const app = express(); //Creating an Express application

const port = process.env.PORT;

app.use(cors()); //Setting up the middleware:

app.use(express.json()); //parses incoming requests from JSON into a JS object

app.use(express.urlencoded({ extended: true })); //parses data from forms

//Defines a POST endpoint under the /contact path (It handles the contact form)
app.post("/contact", async (req, res) => {
  try {
    const data = await sendEmail(req.body);

    res.send(data);

    console.log("The message has been sent 🎉");
  } catch (err) {
    res.status(500).send(err); //In case of an error, returns code 500 and the error text

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
    //cc: process.env.USER, Optional
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

//I start the server on the selected port and log the information
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
