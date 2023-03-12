import React, { useEffect } from "react";

function Modaloverlay(props) {
  const overlayRef = React.useRef(null);
  return (
    <div
      tabIndex="1"
      className="overlay"
      onKeyDown={props.handleKeyPress}
      onMouseDown={props.handleMouseDown}
      ref={overlayRef}
    ></div>
  );
}

export default Modaloverlay;
