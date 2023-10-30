import { CONTENT } from "./contentData";
function Card({ title, description }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
}

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      {CONTENT.map((contentItem) => (
        <Card key={contentItem.id} {...contentItem} />
      ))}
    </section>
  );
}
