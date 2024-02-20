import { useState } from "react";
import Input from "../Input";
import Button from "../Button";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleClickEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleClickPassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <Input
        type="email"
        id="email"
        placeholder="Your Email"
        value={email}
        onChange={handleClickEmail}
      />

      <label htmlFor="password">Password:</label>
      <Input
        type="password"
        id="password"
        placeholder="Your Password"
        value={password}
        onChange={handleClickPassword}
      />

      <Button type="submit" label="Login" width={200} />
    </form>
  );
};

export default LoginForm;
