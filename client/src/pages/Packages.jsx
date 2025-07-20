import { motion as Motion} from "framer-motion";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import Section from "../components/Section/Section";
import Button from "../components/Button/Button";
import Image from "../components/Image/Image";
import sectionStyles from "../components/Section/Section.module.css";
import buttonStyles from "../components/Button/Button.module.css";
import PackageCart from "../components/PackageCart/PackageCart";
import imageStyles from "../components/Image/Image.module.css";

export default function About() {
  return (
    <>
      <Menu />

      <Section sectionStyle={sectionStyles.zeroSectionPackages}>
        <p>
          Find the perfect package for your celebration <br />
          <br />I know that every wedding, party, or event is unique — and so is
          the music that brings it to life. That’s why I offer a range of DJ
          packages designed to fit the flow of your day and the energy you want
          for your guests. Whether you’re planning just an unforgettable evening
          party or a full day of music, I’ve got a package to suit your vision.
        </p>
      </Section>

      <Section sectionStyle={sectionStyles.firstSectionPackages} p={<></>}>
        <PackageCart
          packageTitle={"Package 1"}
          packageText={
            "Evening reception DJ set (up to 4 hours) + equipment hire Includes: PA system, lights, and DJ setup. "
          }
          prince={"from £600"}
          packageImage={
            <Image
              imageHref={"/images/galleryImage/image_gallery_3.webp"}
              imageStyle={imageStyles.packagesSectionImage}
            />
          }
        />
        <PackageCart
          packageTitle={"Package 2"}
          packageText={
            "Everything in Package 1 + drinks reception background DJ set Includes: 2x PA systems, lights, and DJ setup. "
          }
          prince={"from £700"}
          packageImage={
            <Image
              imageHref={"/images/galleryImage/image_gallery_4.webp"}
              imageStyle={imageStyles.packagesSectionImage}
            />
          }
        />
        <PackageCart
          packageTitle={"Package 3"}
          packageText={
            "Full-day with everything in Package 1 + 2 + playlist throughout dinner Includes: 2x PA systems, lights, and DJ setup."
          }
          prince={"from £800"}
          packageImage={
            <Image
              imageHref={"/images/galleryImage/image_gallery_5.webp"}
              imageStyle={imageStyles.packagesSectionImage}
            />
          }
        />
      </Section>
      <Section sectionStyle={sectionStyles.twoSectionPackages}>
        <Image
          imageHref={"./images/sectionImage/section_image_4.webp"}
          imageStyle={imageStyles.packageCartImage}
        />
        <Motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          Quality sound and seamless service <br />
          Each package comes with my professional DJ service, high-quality PA
          systems, lighting, and a setup that looks as good as it sounds. From
          the drinks reception to dinner playlists and of course the high-energy
          evening set, I make sure the music is perfectly tailored to your
          tastes and keeps your guests on the dance floor.
          <br />
          <Button
            buttonStyles={buttonStyles.button}
            buttonStylesElement={{
              boxShadow: `inset 0 0 0 2px rgb(255, 255, 255)`,
              color: `#fff`,
            }}
            items={["about"]}
            hrefs={["/about"]}
          />
        </Motion.p>
      </Section>

      <Image
        imageHref={"./images/sectionImage/section_image_3.webp"}
        imageStyle={imageStyles.secondImage}
      />

      <Footer />
    </>
  );
}
