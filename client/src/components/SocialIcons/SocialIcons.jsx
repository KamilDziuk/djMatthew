import styles from "./SocialIcons.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function SocialIcons() {
  return (
    <div className={styles.socialIcons}>
      <a
        style={
          window.location.pathname === "/packages"
            ? { color: "#000" }
            : { color: "#ffff" }
        }
        href="https://www.facebook.com/people/DJ-Matthew/61571831636566/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a
        style={
          window.location.pathname === "/packages"
            ? { color: "#000" }
            : { color: "#ffff" }
        }
        href="https://www.instagram.com/dj_matthew38/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>

      <a
        style={
          window.location.pathname === "/packages"
            ? { color: "#000" }
            : { color: "#ffff" }
        }
        href="https://open.spotify.com/playlist/7DVvv64KkyMPE7dmHEEfOU?si=33a200baaea94be2&nd=1&dlsi=2a578d884fc24da6"
        target="_blank"
      >
        <FontAwesomeIcon icon={faSpotify} />
      </a>
    </div>
  );
}

export function HamburgerIcons() {
  return (
    <button className={styles.hamburger}>
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
}
