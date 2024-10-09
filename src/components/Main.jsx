import React from "react";

export default function Main(props) {
  return (
    <>
      {props.data.media_type == "video" ? (
        <div className="imgContainer">
          <iframe
            src={props.data.url}
            title={props.data.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="bgImage"
          ></iframe>
        </div>
      ) : (
        <div className="imgContainer">
          <img
            src={props.data.hdurl}
            alt={props.data.title}
            className="bgImage"
          />
        </div>
      )}
    </>
  );
}
