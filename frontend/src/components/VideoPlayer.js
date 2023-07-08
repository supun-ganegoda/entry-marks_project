import React from "react";

const VideoPlayer = () => {
  const videoId = "uBLrSs16FrI";

  return (
    <div
      style={{
        overflow: "hidden",
        paddingBottom: "56.25%",
        position: "relative",
        height: "0",
      }}
    >
      <iframe
        style={{
          left: 0,
          top: 0,
          height: "100%",
          width: "100%",
          position: "absolute",
        }}
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Video Player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
