export default function Login() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        id=""
        placeholder="email"
        onChange={(e) => inputHandleChange("email", e.target.value)}
      />
      <input type="password" name="password" id="" placeholder="password" />
      <button type="submit">submit</button>
    </form>
  );
}
