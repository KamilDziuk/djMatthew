import SocialIcons from "../SocialIcons/SocialIcons";
import { HamburgerIcons } from "../SocialIcons/SocialIcons";
import Navigation from "../Navigation/Navigation";
import { menuBehavior } from "./menuBehavior";
import styles from "./Menu.module.css";
import imageStyles from "../Image/Image.module.css";
import navigationStyles from "../Navigation/Navigation.module.css";

export default function Menu() {
  const {
    showHamburger,
    showCloseHandle,
    menuBeltStyle,
    hamburgerHandle,
    closeMobileHandle,
  } = menuBehavior();

  return (
    <>
      {showHamburger ? (
        <>
          {/* <Image
              imageHref={"/images/logoImages/images/logoImage/images/logoImage/vinyl-record-character-white.webp"}
              imageStyle={imageStyles.imageMenu}
            /> */}

          <a href="/">
            <img
              loading="eager"
              src={
                window.location.pathname === "/packages"
                  ? "/images/logoImage/vinyl-record-character-white.webp"
                  : "/images/logoImage/vinyl-record-character-white.webp"
              }
              className={imageStyles.imageMenu}
              alt="logo"
            />
          </a>
          <nav
            className={` ${styles.wrapMenuOpen} ${
              showHamburger ? styles.active : ""
            }`}
          >
            <div onClick={hamburgerHandle} className={styles.mobileButton}>
              <HamburgerIcons></HamburgerIcons>
            </div>
          </nav>
        </>
      ) : (
        <>
          {showCloseHandle ? (
            <div className={styles.mobileButton}>
              <div onClick={closeMobileHandle}>x</div>
            </div>
          ) : (
            ""
          )}
          <nav
            className={` ${styles.wrapMenuOpen} ${
              !menuBeltStyle ? "" : styles.active
            }`}
          >
            {/* <Image
              imageHref={"/images/logoImages/images/logoImage/images/logoImage/vinyl-record-character-white.webp"}
              imageStyle={imageStyles.imageMenu}
            /> */}
            <a href="/">
              <img
                loading="eager"
                src={
                  window.location.pathname === "/packages"
                    ? "/images/logoImage/vinyl-record-character-black.webp"
                    : "/images/logoImage/vinyl-record-character-white.webp"
                }
                className={imageStyles.imageMenu}
                alt="logo"
              />
            </a>
            <Navigation
              styleNav={navigationStyles.styleNav}
              items={["Home", "About", "Gallery", "Packages", "Contact"]}
              hrefs={["/", "/about", "/gallery", "/packages", "/contact"]}
            />

            <SocialIcons />
          </nav>
        </>
      )}
    </>
  );
}
