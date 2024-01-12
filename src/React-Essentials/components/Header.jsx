
const reactDescription = ['fundamental', 'crucial', 'core'];
function getRandomIndex(max) {
  return Math.floor(Math.random() * (max + 1));
}
export default function Header() {
  const description = reactDescription[getRandomIndex(2)];
  return (
    <header>
      <p>
        {description} react essentials concept are required for creating any
        react app
      </p>
    </header>
  );
}
