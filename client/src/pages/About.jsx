import Menu from "../components/Menu/Menu";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import Image from "../components/Image/Image";
import Section from "../components/Section/Section";
import Footer from "../components/Footer/Footer";
import imageStyles from "../components/Image/Image.module.css";
import videoStyles from "../components/Video/Video.module.css";
import stylesHeader from "../components/Header/Header.module.css";
import sectionStyles from "../components/Section/Section.module.css";
import buttonStyles from "../components/Button/Button.module.css";

export default function About() {
  return (
    <>
      <Menu />

      <Header
        videoSrc={
          "/videos/headerVideo/header_background_of_the_about_page.webm"
        }
        styleVideo={videoStyles.video}
        styleHeader={stylesHeader.header}
      >
        About
      </Header>

      <Section
        sectionStyle={sectionStyles.zeroSection}
        p={
          <>
            I am a professional DJ with 10 years of experience in weddings and
            events. I can provide you with half or full-day hire for a DJ
            service with a great sound system, DJ equipment, and lights for your
            wedding party. You can expect an energetic and skilfully mixed set
            to entertain your guests. Moreover, I aim to provide everything
            needed for a quality night of music tailored to your specific
            tastes.Your taste of music will be accepted and Playlist and blended
            into all Genre's on the night.
          </>
        }
      ></Section>

      <Image
        imageHref={"/images/logoImage/vinyl-record-character-black.webp"}
        imageStyle={imageStyles.logoSection}
      />

      <Section
        sectionStyle={sectionStyles.zeroSectionAbout}
        p={
          <>
            I use professional Traktor decks and a portable Traktor controller,
            along with a professional PA audio sound system for any occasion. I
            offer service for ceremonies, cocktail hours, weddings, and evening
            parties. I play a vast range of musical genres, from pop, dance,
            house, and hip-hop hits to modern music. Everything is tailored to
            the customer's needs. Based in Lymington, Hampshire, DJ Matthew is a
            versatile and entertaining DJ for your wedding reception.
            <Button
              buttonStylesElement={{
                boxShadow: `inset 0 0 0 2px #ffffff`,
                color: `#ffffff`,
                left: "130%",
                top: "-10%",
              }}
              buttonStyles={buttonStyles.button}
              items={["Gallery"]}
              hrefs={["/gallery"]}
            />
          </>
        }
      >
        <Image
          imageHref={"/images/sectionImage/section_image_3.webp"}
          imageStyle={imageStyles.firstSectionAboutImage}
        />
      </Section>

      <Section
        sectionStyle={sectionStyles.zeroSection}
        p={
          <>
            Meet DJ Matthew - Lymington based mobile DJ bringing the best
            grooves to weddings and events across Hampshire and beyond!
            Specialising in disco, funk, soul and 80’s & 90's feel good party
            gems… Are you a disco lover looking for a friendly, experienced ‘
          </>
        }
      ></Section>

      <Footer />
    </>
  );
}
