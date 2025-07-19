import Image from "../Image/Image";
import imageStyles from "../Image/Image.module.css";

export default function PictureGallery({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <Image
          key={index}
          imageHref={item}
          imageStyle={imageStyles.imageGallery}
        />
      ))}
    </>
  );
}
