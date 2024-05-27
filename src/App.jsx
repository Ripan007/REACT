import React from 'react';
import Users from './components/Users';

export default function App() {
  return (
    <div>
      <Users />
    </div>
  );
}

/*
✈️✈️✈️✈️ Error Boundaries ✈️✈️✈️✈️
1.A JavaScript error in a part of the UI shouldn’t break the whole app.
 To solve this problem for React users,
 React 16 introduces a new concept of an “error boundary”.
2.Error boundaries are React components that catch JavaScript
errors anywhere in their child component tree,
log those errors, and display a fallback UI instead
of the component tree that crashed. Error boundaries
catch errors during rendering, in lifecycle methods,
 and in constructors of the whole tree below them.


*/
