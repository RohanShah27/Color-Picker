import React from "react";
import "./colorPicker.css";
export default function ColorPicker({ color, onChange, ...rest }) {
  return (
    <div className="picker-parent">
      <input
        name="color"
        type="color"
        value={color}
        onChange={onChange}
        {...rest}
        className="picker"
      />
      <input
        name="color"
        type="text"
        value={color}
        onChange={onChange}
        {...rest}
        className="colorpicker-input"
      />
    </div>
  );
}
rcc;
