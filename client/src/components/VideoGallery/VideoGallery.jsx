import { motion } from "framer-motion";
import videoStyles from "./VideoGallery.module.css";
export default function VideoGallery({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <motion.video
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          // viewport={{ once: true }}
          className={videoStyles.videoGallery}
          key={index}
          controls
        >
          <source src={item} type="video/mp4"></source>
        </motion.video>
      ))}
    </>
  );
}
