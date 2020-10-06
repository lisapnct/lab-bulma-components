import React from "react";

const coolButton = (props) => {
  return (
    <div>
      <button>{props.children}</button>
    </div>
  );
};

export default coolButton;
