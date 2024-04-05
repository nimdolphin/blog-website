import React from "react";
import "./styles.scss";

const Input = React.forwardRef(
  (
    {
      placeholder,
      type,
      value,
      onChange,
      width = "100px",
      height = "100px",
      isError,
    },
    ref
  ) => {
    return (
      <input
        className="input-form"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          borderColor: isError ? "red" : "#dcdddf",
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
