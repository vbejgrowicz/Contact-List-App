import React from 'react';

class App extends React.Component {
  componentWillMount() {
    console.log('App Loaded!');
  }

  render() {
    return (
      <div>
        <h1>Contacts</h1>
      </div>
    );
  }
}

export default App;
