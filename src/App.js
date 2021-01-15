import React from 'react';
import TableauReport from 'tableau-react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <TableauReport
        url={process.env.REACT_APP_WORKBOOK_URL}
      />
    </div>
  );
}

export default App;
