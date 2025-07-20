// import Button from "../Button/Button";
import { motion as Motion} from "framer-motion";
import { useMenuBehaviorAfterSending } from "./formBehavior";

import fromStyle from "./From.module.css";
import buttonStyles from "../Button/Button.module.css";

export default function Form() {


  //Variables from functions menuBehaviorAfterSending
  const {
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
  } = useMenuBehaviorAfterSending();
  return (
    <>
      {successfulSending ? (
        <Motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className={fromStyle.from}
          onSubmit={sendMail}
        >
          <input
            type="text"
            className={fromStyle.input}
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            className={fromStyle.input}
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            className={fromStyle.input}
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            className={fromStyle.input}
            placeholder="Phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <textarea
            rows="4"
            cols="50"
            className={fromStyle.input}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            type="submit"
            className={`${buttonStyles.button} ${fromStyle.input}`}
          >
            Send
          </button>
        </Motion.form>
      ) : (
        <form className={fromStyle.from}>
          {!sendingError ? (
            <p style={{ color: "green" }}>Message sent successfully</p> //If the sending is successful, display
          ) : (
            <p style={{ color: "red" }}>An error occurred, please try again</p> //If sending fails, display
          )}
        </form>
      )}
    </>
  );
}
