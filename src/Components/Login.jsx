export default function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const identicalObject = fd.getAll("identical");
    const data = Object.fromEntries(fd.entries());
    data.identical = identicalObject;
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" id="" />
      <input type="paidenticalObjectssword" id="" />
      <input type="text" name="firstName" id="" />
      <input type="text" name="lastName" id="" />
      <input type="checkbox" name="identical" value="animal" id="animal" />
      <input type="checkbox" name="identical" value="human" id="human" />
      <button type="reset">reset</button>
      <button type="submit">login</button>
    </form>
  );
}
