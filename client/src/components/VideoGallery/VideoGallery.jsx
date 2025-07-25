import { motion as Motion} from "framer-motion";
import videoStyles from "./VideoGallery.module.css";
export default function VideoGallery({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <Motion.video
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          // viewport={{ once: true }}
          className={videoStyles.videoGallery}
          key={index}
          controls
        >
          <source src={item} type="video/webm"></source>
        </Motion.video>
      ))}
    </>
  );
}
