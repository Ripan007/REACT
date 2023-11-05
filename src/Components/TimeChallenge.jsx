export default function TimeChallenge({ title, targetTime }) {
  return (
    <section className="flex flex-col w-52 p-4 m-4 bg-slate-100">
      <h2>{title}</h2>
      <p>
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button>start Challenge</button>
      </p>
      <p>time is running / time is inactive</p>
    </section>
  );
}
