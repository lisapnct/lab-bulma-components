import React from "react";
import "../styles/formField.css";

function formField(props) {
  return (
    <div>
      <div className="field form">
        <label className="label">{props.label}</label>
        <div className="control">
          <input
            className="input"
            type={props.type}
            placeholder={props.placeholder}
          />
        </div>
      </div>
    </div>
  );
}

export default formField;
