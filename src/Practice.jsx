import React from 'react';
// const element = <h1>hello</h1>;

const element = React.createElement('h1', 'hello,world');
function Practice() {
  return <div>{element}</div>;
}

export default Practice;
