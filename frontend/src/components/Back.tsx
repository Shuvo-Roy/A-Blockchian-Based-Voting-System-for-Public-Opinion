import React from "react";
import { BiArrowBack } from "react-icons/bi";

interface BackProps {
  call: (any: any) => any;
}

const Back = (props: BackProps) => {
  return (
    <div onClick={props.call} className="back title-small">
      <span className="icon">
        <BiArrowBack />
      </span>
      BACK
    </div>
  );
};

export default Back;
