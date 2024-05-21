export default function CoreConcepts({ title, describe }) {
  return (
    <div
      style={{
        border: '1px solid black',
        // maxWidth: '100px',
        padding: '10px',
        borderRadius: '10px',
        display: 'flex',
        gap: '20px',
      }}
    >
      <div>
        <h1>{title}</h1>
        <p>{describe}</p>
      </div>
    </div>
  );
}
