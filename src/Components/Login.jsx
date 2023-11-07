export default function Login() {
  return (
    <form>
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
        <button className="bg-green-400 p-1 rounded-sm">reset</button>
        <button>login</button>
      </p>
    </form>
  );
}
