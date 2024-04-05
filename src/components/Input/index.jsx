import React from "react";
import "./styles.scss";

const Input = React.forwardRef(
  (
    {
      placeholder,
      type,
      value,
      onChange,
      width = "100%",
      height = "100%",
      borderColor = "#dcdddf",
    },
    ref
  ) => {
    return (
      <input
        className="input-form"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          borderColor: `${borderColor}`,
        }}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={ref}
      />
    );
  }
);

export default Input;
