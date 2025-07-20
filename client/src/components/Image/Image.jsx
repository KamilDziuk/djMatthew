import { motion as Motion} from "framer-motion";

export default function Image({ imageHref, imageStyle }) {
  return (
    <>
      <Motion.img
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
