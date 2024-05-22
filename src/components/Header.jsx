export default function Header() {
  const reactDescription = ['fundamental', 'core', 'essentials'];
  function getRandomIndex(max) {
    Math.floor(Math.random() * (max + 1));
  }
  return (
    <header>
      <h1>react essentials</h1>
      <p>
        {reactDescription[getRandomIndex(3)]} core react concepts you will need
        for almost any app you are going to build
      </p>
    </header>
  );
}
