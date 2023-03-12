import React from "react";
import ReactDOM from "react-dom";
import Modaloverlay from "../modaloverlay/modaloverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function Modal(props) {
  const node = document.createElement("div");
  document.body.appendChild(node);
  if (!props.showpopup) return null;
  return ReactDOM.createPortal(
    <>
      <div className="modal">
        <div className="modal__close">
          <CloseIcon type="primary" onClick={props.onClose} />
        </div>
        {props.child}
      </div>
      <Modaloverlay
        handleKeyPress={props.handleKeyPress}
        handleMouseDown={props.handleMouseDown}
      />
    </>,
    node
  );
}

export default Modal;
