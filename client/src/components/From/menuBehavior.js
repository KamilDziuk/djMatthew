import axios from "axios";
import { useState } from "react";

export function MenuBehaviorAfterSending() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [successfulSending, setSuccessfulSending] = useState(true);
  const [sendingError, setSendingError] = useState(true);

  // Function variable for sending data from the form
  const sendMail = (e) => {
    e.preventDefault();

    // Sending form data to the /contact endpoint using axios
    axios
      .post("http://localhost:5000/contact", {
        firstName,
        lastName,
        email,
        phone,
        message,
      })
      .then(() => {
        // Display success message on page after 2s show form
        setTimeout(() => {
          setSuccessfulSending(true);
        }, 2000);
        setSuccessfulSending(false);
        setSendingError(false);
      })
      .catch((err) => {
        // Display failure message on page after 2s show form
        setTimeout(() => {
          setSuccessfulSending(true);
        }, 2000);
        setSuccessfulSending(false);
        setSendingError(true);
        console.error("error", err.message);
      });
  };
  // Returning constant variables from the menuBehaviorAfterSending function
  return {
    successfulSending,
    sendingError,
    sendMail,
    firstName,
    lastName,
    email,
    phone,
    message,
    setEmail,
    setPhone,
    setMessage,
    setFirstName,
    setLastName,
  };
}
