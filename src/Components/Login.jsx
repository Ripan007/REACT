import { useState } from "react";

export default function Login() {
  const [enterData, setEnterData] = useState({
    email: "default",
    password: "default",
  });

  function inputHandleChange(identifier, value) {
    setEnterData((prevValue) => ({
      ...prevValue,
      [identifier]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(enterData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        id=""
        value={enterData.email}
        placeholder="email"
        onChange={(e) => inputHandleChange("email", e.target.value)}
      />
      <input
        type="password"
        name="password"
        id=""
        value={enterData.password}
        placeholder="password"
        onChange={(e) => inputHandleChange("password", e.target.value)}
      />
      <button type="reset">reset</button>
      <button type="login">login</button>
    </form>
  );
}
