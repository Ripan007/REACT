export default function App() {
  function handleSubmit() {
    console.log("submitted");
  }
  return (
    <>
      <h1>login</h1>
      <form>
        <label htmlFor="">email:</label>
        <input type="email" name="" id="" />
        <br />
        <label htmlFor="">password:</label>
        <input type="password" name="" id="" />
        <br />
        <button className="">reset</button>
        <button
          type="button"
          className="bg-red-700 text-white p-9"
          onClick={handleSubmit}
        >
          login
        </button>
      </form>
    </>
  );
}
