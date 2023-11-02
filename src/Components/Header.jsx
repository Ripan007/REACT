export default function Header() {
  return (
    <header className="flex flex-col  items-center mt-8 mb-16">
      <img
        className="object-contain mb-8  w-44 h-44"
        src="https://cdn.pixabay.com/photo/2023/10/28/18/02/songbird-8348139_1280.png"
        alt="A canvas"
      />
      <h1 className="text-amber-800">ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
