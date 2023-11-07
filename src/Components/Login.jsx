import { useState } from "react";

export default function Login() {
  const [enterValue, setEnterValue] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(identifier, value) {
    setEnterValue((preValue) => ({
      ...preValue,
      [identifier]: value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(enterValue);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>login</h2>
      <div>
        <label htmlFor="">email:</label>
        <input
          type="email"
          name=""
          id=""
          value={enterValue.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">password:</label>
        <input
          type="password"
          name=""
          id=""
          value={enterValue.password}
          onChange={(e) => handleInputChange("password", e.target.value)}
        />
      </div>
      <p>
        <button className="bg-green-400 p-1 rounded-sm text-white m-3">
          reset
        </button>
        <button className="bg-red-400 p-1 rounded-sm text-white">login</button>
      </p>
    </form>
  );
}
