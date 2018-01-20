import React from 'react';
import ContactListContainer from './ContactListContainer';
import Sort from './Sort';

function App() {
  return (
    <div>
      <h1>Contacts</h1>
      <Sort />
      <ContactListContainer />
    </div>
  );
}

export default App;
