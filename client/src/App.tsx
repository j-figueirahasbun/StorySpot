import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld.tsx';
import apiService from './services/apiService.tsx';

function App() {
  return (
    <div className="App">
      <HelloWorld/>
    </div>
  );
}

export default App;
