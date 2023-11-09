import { useNavigate, Link } from "react-router-dom";

const PRODUCT = [
  { id: "p1", title: "product 1" },
  { id: "p2", title: "product 2" },
  { id: "p3", title: "product 3" },
];

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
        {PRODUCT.map((prod) => (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Products;
