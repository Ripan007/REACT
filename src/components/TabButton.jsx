export default function TabButton({ children }) {
  function handleClick() {
    console.log('button got clicked');
  }
  return (
    <div>
      <li>
        <button onClick={handleClick}> {children}</button>
      </li>
    </div>
  );
}
