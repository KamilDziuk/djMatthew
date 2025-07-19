import Video from "../Video/Video";
// import Image from "../Image/Image";
export default function Header({
  children,
  styleHeader,
  styleVideo,
  videoSrc,
  imageSrc,
  styleImage,
  clipPathStyle,
}) {
  return (
    <>
      <header style={clipPathStyle} className={styleHeader}>
        {window.location.pathname === "/" ||
        window.location.pathname === "/about" ||
        window.location.pathname === "/contact" ? (
          <Video videoSrc={videoSrc} styleVideo={styleVideo} />
        ) : (
          <img src={imageSrc} loading="eager" className={styleImage} />
        )}
        <h1>{children}</h1>
      </header>
    </>
  );
}
