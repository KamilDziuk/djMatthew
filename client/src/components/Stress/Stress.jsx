import { motion } from "framer-motion";
import styleStress from "./Stress.module.css";
export default function Stress({ children }) {
  return (
    <>
      <motion.b
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        // viewport={{ once: true }}
      >
        {children}
      </motion.b>
    </>
  );
}
