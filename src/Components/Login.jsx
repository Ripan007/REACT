import { useState } from "react";

export default function Login() {
  const [getInput, setGetInput] = useState({
    email: "",
    password: "",
  });

  function handleChange(identifier, value) {
    setGetInput((preValue) => ({
      ...preValue,
      [identifier]: value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(getInput);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name=""
        id=""
        value={getInput.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />
      <input
        type="password"
        name=""
        id=""
        value={getInput.password}
        onChange={(e) => handleChange("password", e.target.value)}
      />
      <button>reset</button>
      <button>login</button>
    </form>
  );
}
