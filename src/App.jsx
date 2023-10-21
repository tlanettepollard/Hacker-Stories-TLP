import * as React from 'react';

function getTitle(title) {
  return title;
}

export default function App() {

  return (
    <div>
      <h1>Hello {getTitle('React')}</h1>

      <label htmlFor="search">Search</label>
      <input id='search' type="text" />
    </div>
  );
}
