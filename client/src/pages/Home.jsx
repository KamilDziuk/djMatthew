import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Image from "../components/Image/Image";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import Section from "../components/Section/Section";
import sectionStyles from "../components/Section/Section.module.css";
import imageStyles from "../components/Image/Image.module.css";
import stylesHeader from "../components/Header/Header.module.css";
import buttonStyles from "../components/Button/Button.module.css";
import videoStyles from "../components/Video/Video.module.css";
import Video from "../components/Video/Video";
export default function Home() {
  return (
    <>
      <Menu />

      <Header
        videoSrc={"/videos/headerVideo/header_background_of_the_home_page.webm"}
        styleVideo={videoStyles.video}
        styleHeader={stylesHeader.header}
        clipPathStyle={{
          clipPath: ` polygon(62% 0, 100% 0, 100% 35%, 100% 100%, 81% 93%, 41% 99%, 16% 92%, 0 98%, 0 0, 20% 0)`,
        }}
        backgroundImageHeaderH1={{
          clipPath: `polygon(8% 34%, 100% 0%, 79% 89%, 9% 71%)`,
        }}
      >
        Dj Matthew
      </Header>

      <Section
        sectionStyle={sectionStyles.zeroSection}
        p={
          <>
            Hi, I’m DJ Matthew — a professional DJ based in Lymington,
            Hampshire. With over 10 years of experience in weddings, cocktail
            hours, ceremonies, and evening parties, I know how to create the
            perfect atmosphere for any occasion. Whether you’re looking for
            relaxed background music or an energetic, packed dance floor, I’m
            here to bring your vision to life. Every event is personal to me,
            and I work closely with you to make sure the music reflects your
            style and keeps your guests entertained all night.
          </>
        }
      ></Section>

      <Image
        imageHref={"/images/logoImage/vinyl-record-character-black.webp"}
        imageStyle={imageStyles.logoSection}
      />

      <Section
        sectionStyle={sectionStyles.firstSection}
        p={
          <>
            Music tailored to you and your guests I believe that the right music<br></br><br></br>
            is the heart of every unforgettable celebration. Great music doesn’t
            just fill the room — it creates emotions, connects people, and keeps
            the energy alive from the very first song to the final track of the
            night. That’s why I always take the time to understand your style,
            your favourite artists, and the atmosphere you want to create for
            your event. Whether you love chart hits, dance music, house,
            hip-hop, R&B, disco classics, commercial remixes, or a mix of
            everything, I carefully build a seamless set that matches the mood
            of your guests and keeps the dance floor moving all night long.
            Every event is unique, so I adapt the music live during the party to
            make sure everyone is having an amazing time.<br></br><br></br> Using professional
            Traktor decks, a portable DJ controller, and a high-quality PA sound
            system, I deliver clear, balanced, and powerful sound no matter the
            venue size. From small private parties to larger celebrations, the
            setup is designed to provide both excellent audio quality and
            reliability throughout the entire event. <br></br><br></br>To make the experience even
            more memorable, I also use dynamic lighting effects that help create
            the perfect party atmosphere. <br></br><br></br>Combined with smooth transitions,
            energetic mixing, and crowd interaction, the result is a vibrant and
            unforgettable experience for you and your guests. My goal is simple
            — to create a night full of great music, positive energy, and
            moments people will remember long after the party ends.
            <br />
            <Button
              buttonStyles={buttonStyles.button}
              buttonStylesElement={{
                boxShadow: `inset 0 0 0 2px #ffffff`,
                color: `#ffffff`,
              }}
              items={["The Music"]}
              hrefs={[
                "https://open.spotify.com/playlist/7DVvv64KkyMPE7dmHEEfOU?si=33a200baaea94be2&nd=1&dlsi=2a578d884fc24da6",
              ]}
            />
          </>
        }
      >
        <Video
          videoSrc={"/videos/sectionVideo/section_video_0.webm"}
          styleVideo={imageStyles.firstSectionImage}
        />
      </Section>

      <Image
        imageHref={"./images/sectionImage/section_image_2.webp"}
        imageStyle={imageStyles.secondImage}
      />

      <Section
        sectionStyle={sectionStyles.thirdSection}
        p={
          <>
            Let’s create an unforgettable night together Take a look around my
            website to see photos, videos, and more details about what I offer.
            You can check out my gallery to get inspired by past events, or head
            straight to the packages page to see how we can work together. I
            can’t wait to help you plan your perfect wedding or party — so get
            in touch today and let’s make it a night your guests will never
            forget!
            <br />
            <Button
              buttonStyles={buttonStyles.button}
              buttonStylesElement={{
                boxShadow: `inset 0 0 0 2px #000000ff`,
                color: `#000`,
              }}
              items={["the packages"]}
              hrefs={["/packages"]}
            />
          </>
        }
      ></Section>

      <Footer />
    </>
  );
}
