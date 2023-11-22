import React from 'react';
import { useContext } from 'react';
import { Context } from '../main';

function Row() {
  const data = useContext(Context);
  console.log(data);
  return (
    <div>
      <h1>row page</h1>
      {data}
    </div>
  );
}

export default Row;
