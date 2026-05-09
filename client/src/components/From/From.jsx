// import Button from "../Button/Button";
import { motion as Motion } from "framer-motion";
import useContactForm from "./formBehavior";
import formStyle from "./Form.module.css";
import buttonStyles from "../Button/Button.module.css";

export default function Form() {
  const {
    handleSubmit,
    register,
    isSubmitting,
    onSubmit,
    successfulSending,
    sendingError,
    errors,
  } = useContactForm();
  return (
    <>
      {successfulSending ? (
        <Motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className={formStyle.from}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            className={formStyle.input}
            placeholder="First name"
            {...register("firstName")}
          />

          {errors.firstName && (
            <p className={formStyle.inputAlert}>{errors.firstName.message}</p>
          )}

          <input
            type="text"
            className={formStyle.input}
            placeholder="Last name"
            {...register("lastName")}
          />

          {errors.lastName && (
            <p className={formStyle.inputAlert}>{errors.lastName.message}</p>
          )}

          <input
            type="email"
            className={formStyle.input}
            placeholder="Email"
            {...register("email")}
          />

          {errors.email && (
            <p className={formStyle.inputAlert}>{errors.email.message}</p>
          )}

          <input
            type="tel"
            className={formStyle.input}
            placeholder="Phone"
            {...register("phone")}
          />

          {errors.phone && (
            <p className={formStyle.inputAlert}>{errors.phone.message}</p>
          )}

          <textarea
            rows="4"
            cols="50"
            className={formStyle.input}
            placeholder="Message"
            {...register("message")}
          />

          {errors.message && (
            <p className={formStyle.inputAlert}>{errors.message.message}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`${buttonStyles.button} ${formStyle.input}`}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </Motion.form>
      ) : (
        <form className={formStyle.from}>
          {!sendingError ? (
            <p style={{ color: "green" }}>Message sent successfully</p>
          ) : (
            <p style={{ color: "red" }}>An error occurred, please try again</p>
          )}
        </form>
      )}
    </>
  );
}
