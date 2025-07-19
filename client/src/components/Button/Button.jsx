import { motion } from "framer-motion";

export default function Button({
  items,
  hrefs,
  buttonStyles,
  buttonStylesElement,
}) {
  return (
    <>
      {items.map((item, index) => (
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          // viewport={{ once: true }}
          style={buttonStylesElement}
          key={index}
          href={hrefs[index]}
          className={buttonStyles}
        >
          {item}
        </motion.a>
      ))}
    </>
  );
}
