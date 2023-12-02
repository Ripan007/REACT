import React, { useState } from 'react';

function Loading() {
  return <h1>Loading</h1>;
}

function List() {
  return <h1>List</h1>;
}

function Practice() {
  const [loading, setLoading] = useState(true);
  return <div>{loading ? <Loading /> : <List />}</div>;
}

export default Practice;
