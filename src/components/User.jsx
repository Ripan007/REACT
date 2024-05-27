import React from 'react';
import Classes from './Users.module.css';

export default function User(props) {
  return <li className={Classes.User}>{props.name}</li>;
}
