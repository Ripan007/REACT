import { useState } from "react";

export default function Login() {
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(identifier, value) {
    setEnteredValue((preValue) => ({
      ...preValue,
      [identifier]: value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(enteredValue);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name=""
        id=""
        value={enteredValue.email}
        onChange={(e) => handleInputChange("email", e.target.value)}
      />
      <input
        type="password"
        name=""
        id=""
        value={enteredValue.password}
        onChange={(e) => handleInputChange("password", e.target.value)}
      />
      <button>reset</button>
      <button>login</button>
    </form>
  );
}
