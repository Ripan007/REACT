export default function Header() {
  const reactDescription = ['fundamental', 'core', 'essentials'];
  function getRandomIndex(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  const description = reactDescription[getRandomIndex(3)];
  return (
    <header>
      <h1>react essentials</h1>
      <p>
        {description} : core react concepts you will need for almost any app you
        are going to build
      </p>
    </header>
  );
}
