import React from 'react';
import ContactListContainer from './ContactListContainer';
import NewContactItem from './NewContactItem';

function App() {
  return (
    <div>
      <h1>Contacts</h1>
      <NewContactItem />
      <ContactListContainer />
    </div>
  );
}

export default App;
