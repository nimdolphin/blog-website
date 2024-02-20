import "./styles.scss";

const Button = ({ type, label, width = "100%" }) => {
  return (
    <button className="btn" type={type} style={{ width: `${width}px` }}>
      {label}
    </button>
  );
};

export default Button;
