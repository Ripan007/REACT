export default function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const identicalChannel = fd.getAll("identicalValue");
    const data = Object.fromEntries(fd.entries());
    data.identicalValue = identicalChannel;
    console.log(data);
    data.target.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" id="" />
      <input type="text" name="lastName" id="" />
      <input type="checkbox" name="identicalValue" id="" value="animal" />
      <input type="checkbox" name="identicalValue" id="" value="human" />
      <button type="submit">submit</button>
      <button className="reset">reset</button>
    </form>
  );
}
