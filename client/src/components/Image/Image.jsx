import { motion } from "framer-motion";

export default function Image({ imageHref, imageStyle }) {
  return (
    <>
      <motion.img
        loading="lazy"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        // viewport={{ once: true }}
        className={imageStyle}
        src={imageHref}
        alt="image"
      />
    </>
  );
}
