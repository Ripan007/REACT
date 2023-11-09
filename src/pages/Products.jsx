import { useNavigate } from "react-router-dom";
function Products() {
  const navigate = useNavigate();
  function NavigateHandler() {
    navigate("/");
  }
  return (
    <>
      <h1>product page</h1>
      <button className="bg-green-100" onClick={NavigateHandler}>
        navigate
      </button>
      <ul>
        <p>product one</p>
        <p>product two</p>
        <p>product three</p>
      </ul>
    </>
  );
}
export default Products;
