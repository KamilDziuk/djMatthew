import React, { Suspense } from "react";
import Menu from "../components/Menu/Menu";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Section from "../components/Section/Section";
import Image from "../components/Image/Image";
import Button from "../components/Button/Button";
import stylesHeader from "../components/Header/Header.module.css";
import imageStyles from "../components/Image/Image.module.css";
import sectionStyles from "../components/Section/Section.module.css";
import buttonStyles from "../components/Button/Button.module.css";

import { useGalleryLogic } from "../components/PictureGallery/useGalleryLogic";

const LazyPictureGallery = React.lazy(() =>
  import("../components/PictureGallery/PictureGallery")
);
const LazyVideoGallery = React.lazy(() =>
  import("../components/VideoGallery/VideoGallery")
);

export default function Gallery() {
  const { showGalleries, images, videos } = useGalleryLogic();

  return (
    <>
      <Menu />
      <Header
        styleHeader={stylesHeader.header}
        imageSrc={
          "./images/headerImage/header_background_of_the_gallery_page.webp"
        }
        styleImage={imageStyles.headerImage}
      >
        Gallery
      </Header>

      {showGalleries && (
        <Section
          sectionStyle={sectionStyles.gallerySection}
          p={<>See how I bring the party to life!</>}
        >
          <Suspense fallback={null}>
            <LazyPictureGallery items={images} />
            <LazyVideoGallery items={videos} />
          </Suspense>
        </Section>
      )}
      <Section
        sectionStyle={sectionStyles.thirdSectionAbout}
        p={
          <>
            Welcome to my gallery, where you can take a look at some of the
            weddings, parties, and special events I’ve had the pleasure of
            DJing.
            <br />
            <Button
              buttonStyles={buttonStyles.button}
              buttonStylesElement={{
                boxShadow: `inset 0 0 0 2px rgb(0, 0, 0)`,
                color: `#000`,
              }}
              items={["Music"]}
              hrefs={[
                "https://open.spotify.com/playlist/7DVvv64KkyMPE7dmHEEfOU?si=33a200baaea94be2&nd=1&dlsi=2a578d884fc24da6",
              ]}
            />
          </>
        }
      >
        <Image
          imageHref={"/images/logoImage/vinyl-record-character-white.webp"}
          imageStyle={imageStyles.firstSectionGallery}
        />
      </Section>
      <hr />
      <Section
        sectionStyle={sectionStyles.thirdSectionAbout}
        p={
          <>
            Professional and full of energy – every time Here you can see what
            it’s like to work with me as your DJ – from the elegant and
            emotional moments during your ceremony to the packed dance floors
            later in the evening. I use professional Traktor decks, a portable
            controller, and a high-quality PA audio system to deliver
            crystal-clear sound in any venue. Have a look through the photos and
            videos to get a feel for the kind of atmosphere I can create – and
            imagine how I can help make your celebration just as special!
          </>
        }
      />
      <Footer />
    </>
  );
}
