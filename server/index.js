import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { z, ZodString } from "zod";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(helmet());
app.use(
  cors({
    origin: "https://www.matthew-dj.com",
    methods: ["POST"],
  }),
);

//Payload limitation
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Anti-spam
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 40,
  message: "Too many requests, try again later",
});

// validation

const contactSchema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  email: z.string().email(),
  phone: z.string().max(20).optional(),
  message: z.string().min(10).max(1000),
});

app.post("/contact", limiter, async (req, res) => {
  try {
    const presedData = contactSchema.parse(req.body);

    await sendEmail(presedData);

    res.status(200).json({ message: "Message sent successfully" });
  } catch (err) {
    if (err.name === "ZodError") {
      return res.status(400).json({ error: "Invalid input data" });
    }

    console.error("Email error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

async function sendEmail({ firstName, lastName, email, phone, message }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
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
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
