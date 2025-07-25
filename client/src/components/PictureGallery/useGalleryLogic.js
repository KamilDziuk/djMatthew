import { useEffect, useState } from "react";

export function useGalleryLogic() {
  const [showGalleries, setShowGalleries] = useState(false);

  const images = [
    "/images/sectionImage/section_image_3.webp",
    "/images/sectionImage/section_image_2.webp",
    "/images/footerImage/footer_image_0.webp",
    "/images/footerImage/footer_image_2.webp",
    "/images/galleryImage/image_gallery_0.webp",
    "/images/galleryImage/image_gallery_1.webp",
    "/images/galleryImage/image_gallery_2.webp",
    "/images/galleryImage/image_gallery_7.webp",
    "/images/galleryImage/image_gallery_8.webp",
    "/images/footerImage/footer_image_3.webp",
    "/images/galleryImage/image_gallery_9.webp",
  ];

  const videos = [
    "/videos/galleryVideo/video_gallery_9.webm",
    "/videos/galleryVideo/video_gallery_0.webm",
    "/videos/galleryVideo/video_gallery_8.webm",
    "/videos/galleryVideo/video_gallery_1.webm",
    "/videos/galleryVideo/video_gallery_2.webm",
    "/videos/galleryVideo/video_gallery_4.webm",
    "/videos/galleryVideo/video_gallery_3.webm",
    "/videos/galleryVideo/video_gallery_7.webm",
  ];

  useEffect(() => {
    //Scroll handler - checks scroll position
    const handleScroll = () => {
  // If offset by more than 20, shows galleries
      if (window.scrollY >= 20) {
        setShowGalleries(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { showGalleries, images, videos };
}
