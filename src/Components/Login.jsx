import { useRef } from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const emailData = email.current.value;
    const passwordData = password.current.value;
    console.log(emailData, passwordData);
    email.current.value = "";
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" id="" ref={email} />
      <input type="password" name="password" id="" ref={password} />
      <button type="submit">submit</button>
      <button type="reset">reset</button>
    </form>
  );
}
