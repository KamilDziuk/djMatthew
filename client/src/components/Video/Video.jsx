export default function Video({ styleVideo, videoSrc }) {
  return (
    <video
      autoPlay
      muted
      loop={true}
      playsInline
      src={videoSrc}
      className={styleVideo}
    />
  );
}
