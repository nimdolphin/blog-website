import "./styles.scss";

const Button = ({ type, label, width = "100px", onClick }) => {
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
