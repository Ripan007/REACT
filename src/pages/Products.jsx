import { useNavigate } from "react-router-dom";
function Products() {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/products");
  }
  return (
    <>
      <h1>product page</h1>
      <button onClick={handleNavigate}>navigate</button>
    </>
  );
}
export default Products;
