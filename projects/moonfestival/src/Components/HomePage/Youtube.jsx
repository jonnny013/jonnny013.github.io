import React from "react";
import PropTypes from "prop-types";

const Youtube = ({ embedId, vsn }) => (
  <div className="video-responsive">
    <p style={{color: "white"}}>{vsn}</p>
    <iframe
      width="400"
      height="200px"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

Youtube.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default Youtube;
