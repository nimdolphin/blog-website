import "./styles.scss";

const Button = ({
  type = "button",
  label,
  width = "100px",
  onClick,
  className,
}) => {
  return (
    <button
      className={`btn ${className}`}
      type={type}
      style={{
        width: `${width}px`,
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
