export default function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const acquistionChannel = fd.getAll("acquisition");
    const data = Object.fromEntries(fd.entries());
    data.acquisition = acquistionChannel;
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" id="" />
      <input type="password" name="password" id="" />
      <input type="checkbox" name="acquisition" value="animal" id="" />
      <input type="checkbox" name="acquisition" value="human" id="" />
      <button>reset</button>
      <button>login</button>
    </form>
  );
}

// state
//  ref
