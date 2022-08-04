import { useState } from 'react';
import Header from './components/Header';

import './App.css';
import Welcome from './components/Welcome';

function App() {
  const [ changeLanguage, setChangeLanguage ] = useState(0)
  return (
    <main className="App">
      <Header
        language={ changeLanguage }
        setLanguage={ setChangeLanguage }
      />
      <Welcome language={ changeLanguage } />
    </main>
  );
}

export default App;
