import Stress from "../Stress/Stress";
import { motion } from "framer-motion";
import packagesCarts from "./PackageCart.module.css";

export default function PackageCart({
  prince,
  packageTitle,
  packageText,
  packageImage,
}) {
  return (
    <>
      <div className={packagesCarts.packageCart}>
        <div>
          {packageImage}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Stress>{packageTitle}</Stress>
            <br />
            {packageText}
            <span>{prince}</span>
          </motion.p>
        </div>
      </div>
    </>
  );
}
