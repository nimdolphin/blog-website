import "./styles.scss";

const Input = ({ placeholder, type, value, onChange }) => {
  return (
    <input
      className="input-form"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
