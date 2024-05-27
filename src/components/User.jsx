import React from 'react';
import classes from './Users.module.css';

export default function User(props) {
  return <li className={classes.user}>{props.name}</li>;
}
