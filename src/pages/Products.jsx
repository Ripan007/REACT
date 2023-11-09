import { useNavigate } from "react-router-dom";
function Products() {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/");
  }
  return (
    <>
      <h1>product page</h1>
      <button className="bg-green-50" onClick={handleNavigate}>
        navigate
      </button>
    </>
  );
}
export default Products;
