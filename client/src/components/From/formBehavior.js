import axios from "axios";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(20, "Max 20 characters"),

  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(20, "Max 20 characters"),

  email: z.email("Invalid emial"),

  phone: z
    .string()
    .min(1, "Phone number too short")
    .max(20, "Phone number too long"),

  message: z
    .string()
    .min(1, "Message is required")
    .max(2000, "Message too long"),
});

export default function useContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const [successfulSending, setSuccessfulSending] = useState(true);
  const [sendingError, setSendingError] = useState(true);

  const onSubmit = async (data) => {
    try {
      await axios.post("/api/contact", data);
      
      setTimeout(() => {
        setSuccessfulSending(true);
      }, 2000);

      setSuccessfulSending(false);
      setSendingError(false);
      reset();
    } catch (error) {

      setTimeout(() => {
        setSuccessfulSending(true);
      }, 2000);

      setSuccessfulSending(false);
      setSendingError(true);
      console.error(error);
    }
  };

  return {
    handleSubmit,
    register,
    isSubmitting,
    onSubmit,
    successfulSending,
    sendingError,
    errors,
  };
}
