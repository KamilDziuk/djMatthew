import Navigation from "../Navigation/Navigation";
import Image from "../Image/Image";
import navigationStyles from "../Navigation/Navigation.module.css";
import imageStyles from "../Image/Image.module.css";
import stylesFooter from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <h1>Follow Along… </h1>

      <div className={stylesFooter.wrapImges}>
        <a target="_blank" href="https://www.instagram.com/dj_matthew38/">
          <Image
            imageHref={"/images/footerImage/footer_image_0.webp"}
            imageStyle={imageStyles.imageFooter}
          />
        </a>
        <a target="_blank" href="https://www.instagram.com/dj_matthew38/">
          <Image
            imageHref={"/images/footerImage/footer_image_1.webp"}
            imageStyle={imageStyles.imageFooter}
          />
        </a>
        <a target="_blank" href="https://www.instagram.com/dj_matthew38/">
          <Image
            imageHref={"/images/footerImage/footer_image_2.webp"}
            imageStyle={imageStyles.imageFooter}
          />
        </a>
        <a target="_blank" href="https://www.instagram.com/dj_matthew38/">
          <Image
            imageHref={"/images/footerImage/footer_image_3.webp"}
            imageStyle={imageStyles.imageFooter}
          />
        </a>

        <hr style={{ background: " rgb(255, 255, 255)" }} />
      </div>

      <Navigation
        styleNav={navigationStyles.styleNavFooter}
        items={["About", " Contact", "Follow"]}
        hrefs={[
          "/about",
          "/contact",
          "https://www.instagram.com/dj_matthew38/",
        ]}
      />
    </footer>
  );
}
