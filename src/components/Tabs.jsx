import React from 'react';

export default function Tabs({ buttons, children, ButtonsContainer = 'menu' }) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}

/*
multiple state value
nested links
lifting state up
derived state
array and object states


*/
