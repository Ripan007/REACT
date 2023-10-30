function TabButton({ children, isSelected, ...props }) {
  return (
    <article>
      <ul>
        <button className={isSelected ? "active" : ""} {...props}>
          {children}
        </button>
      </ul>
    </article>
  );
}

export default TabButton;
