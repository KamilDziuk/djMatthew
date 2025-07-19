import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import Section from "../components/Section/Section";
import Image from "../components/Image/Image";
import Header from "../components/Header/Header";
import From from "../components/From/From";
import videoStyles from "../components/Video/Video.module.css";
import stylesHeader from "../components/Header/Header.module.css";
import sectionStyles from "../components/Section/Section.module.css";
import imageStyles from "../components/Image/Image.module.css";
export default function About() {
  return (
    <>
      <Menu />

      <Header
        videoSrc={
          "/videos/headerVideo/header_background_of_the_contact_page.webm"
        }
        styleVideo={videoStyles.video}
        styleHeader={stylesHeader.header}
      >
        Contact
      </Header>

      <Section
        sectionStyle={sectionStyles.thirdSectionAbout}
        p={
          <>
            If you’d like to book me for your wedding, party, or any special
            occasion, I’d love to hear from you!
            <br /> Email:
            <a href="mailto:kowalewskimateusz34@gmail.com">
              kowalewskimateusz34@gmail.com
            </a>
            <br />
            Phone:<a href="tel:+44 07470 720851"> +44 07470 720851</a>
          </>
        }
      >
        <From />
      </Section>

      <Section
        sectionStyle={sectionStyles.zeroSectionAbout}
        p={
          <>
            Whether you already know exactly what you want, or you’re just
            starting to plan, I’m happy to guide you through the options and
            answer any questions you may have. From music styles and playlists
            to equipment setup and timings, I’ll make sure everything is clear
            and stress-free so you can focus on enjoying your celebration.
          </>
        }
      >
        <Image
          imageHref={"/images/sectionImage/section_image_0.webp"}
          imageStyle={imageStyles.firstSectionContactImage}
        />
      </Section>

      <Section
        sectionStyle={sectionStyles.zeroSection}
        p={
          <>
            You can contact me via the form on this page, send me an email, or
            just give me a call — whatever’s easiest for you. I’ll get back to
            you as soon as possible, usually within 24 hours. I look forward to
            hearing more about your event and working together to make it a
            night to remember!
          </>
        }
      ></Section>

      <Footer />
    </>
  );
}
