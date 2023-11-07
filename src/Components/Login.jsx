import { useState } from "react";

export default function Login() {
  const [enterValues, setEnterValues] = useState({
    email: "default",
    password: "",
  });

  const emailNotValid =
    enterValues.email !== "" && !enterValues.email.includes("@");
  function inputHandleChange(identifier, value) {
    setEnterValues((prevValue) => ({
      ...prevValue,
      [identifier]: value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(enterValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        id=""
        value={enterValues.email}
        placeholder="email"
        onChange={(e) => inputHandleChange("email", e.target.value)}
      />
      {emailNotValid && <p>email is not valid</p>}
      <input
        type="password"
        name="password"
        id=""
        value={enterValues.password}
        placeholder="password"
        onChange={(e) => inputHandleChange("password", e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
}
