import React from 'react';
import Classes from './Users.module.css';

export default function User(props) {
  return <li className={Classes.user}>{props.name}</li>;
}
