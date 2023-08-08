import React from 'react';
import './App.css';

import Timer from './components/Timer';
import Navbar from './components/Navbar';
import About from './components/About';
import { SettingsProvider } from './context/SettingsContext';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SettingsProvider>
        <Timer />
      </SettingsProvider>
      {/* <About /> */}
    </div>
  );
}

export default App;
