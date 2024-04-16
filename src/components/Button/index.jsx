import "./styles.scss";

const Button = ({ type, label, width = "100px", onClick, backgroundColor }) => {
  return (
    <button
      className="btn"
      type={type}
      style={{
        width: `${width}px`,
        backgroundColor: `${backgroundColor}`,
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
