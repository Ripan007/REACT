import React from 'react';

function Card() {
  return <h1>card</h1>;
}

function Practice() {
  return (
    <div>
      <hr />
      <Card name="awesome">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          aut!
        </p>
        <p>
          <a href="">click on me</a>
        </p>
      </Card>
    </div>
  );
}

export default Practice;
