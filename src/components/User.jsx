import React from 'react';

export default function User(props) {
  return <li className={Classes.user}>{props.name}</li>;
}
