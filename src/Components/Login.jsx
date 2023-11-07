import { useRef } from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const enterEmail = email.current.value;
    const enterPassword = password.current.value;
    console.log(enterEmail, enterPassword);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="" id="" ref={email} />
      <input type="password" name="" id="" ref={password} />
      <button>reset</button>
      <button>login</button>
    </form>
  );
}
