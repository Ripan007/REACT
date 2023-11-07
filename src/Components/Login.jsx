export default function Login() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>login</h2>
      <div>
        <label htmlFor="">email:</label>
        <input type="email" name="" id="" />
      </div>
      <div>
        <label htmlFor="">password:</label>
        <input type="password" name="" id="" />
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
