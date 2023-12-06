function Section({ title, children, ...props }) {
  // ... {rest operator}
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
export default Section;
