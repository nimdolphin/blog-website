import { useState } from "react";
import "./styles.scss";

const Input = ({ placeholder, type }) => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  return (
    <form>
      <input
        className="input-form"
        type={type}
        placeholder={placeholder}
        value={email}
        onChange={handleChange}
      />
    </form>
  );
};

export default Input;
