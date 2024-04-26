import React from "react";
import { GiPlainCircle } from "react-icons/gi";
import { BsQuestion } from "react-icons/bs";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const HelpIcon = () => {
  const helpIconContainer = document.getElementById("help-icon");
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Need Help
    </Tooltip>
  );
  return ReactDOM.createPortal(
    <div className="position-absolute z-9999 ">
      {/*  */}
      <OverlayTrigger
        placement="left"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
        className="position-relative z-99999"
      >
        <div className=" text-color-custom position-fixed bottom-2 right-2">
          <GiPlainCircle size={40} />
          <div className="position-absolute  top-0 translate-middle translate-y-1.5">
            <BsQuestion color="white" size={30} />
          </div>
        </div>
      </OverlayTrigger>
    </div>,
    helpIconContainer
  );
};

export default HelpIcon;
