export default function Wrapper({ title, children }) {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
}
