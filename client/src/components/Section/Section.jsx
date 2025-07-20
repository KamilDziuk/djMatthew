import { motion as Motion} from "framer-motion";

export default function Section({ children, sectionStyle, p }) {
  return (
    <>
      <section className={sectionStyle}>
        {window.location.pathname === "/packages" ? null : (
          <Motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            // viewport={{ once: true }}
          >
            {p}
          </Motion.p>
        )}
        {children}
      </section>
    </>
  );
}
