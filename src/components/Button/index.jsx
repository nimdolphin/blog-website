import "./styles.scss";

const Button = ({ type, label, width = "100%", onClick }) => {
  return (
    <button
      className="btn"
      type={type}
      style={{ width: `${width}px` }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
