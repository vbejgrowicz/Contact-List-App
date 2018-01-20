import React from 'react';
import ContactListContainer from './ContactListContainer';
import Sort from './Sort';
import NewContactItem from './NewContactItem';

function App() {
  return (
    <div>
      <h1>Contacts</h1>
      <NewContactItem />
      <Sort />
      <ContactListContainer />
    </div>
  );
}

export default App;
