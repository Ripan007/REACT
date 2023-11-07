export default function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" id="" />
      <input type="password" name="password" id="" />
      <button>reset</button>
      <button>login</button>
    </form>
  );
}

// state
//  ref
