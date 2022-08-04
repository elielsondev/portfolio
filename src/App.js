import { useState } from 'react';
import Header from './components/Header';

import './App.css';

function App() {
  const [ changeLanguage, setChangeLanguage ] = useState(0)
  return (
    <main className="App">
      <Header
        language={ changeLanguage }
        setLanguage={ setChangeLanguage }
      />
    </main>
  );
}

export default App;
