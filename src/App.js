import { useState } from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './App.css';
import Footer from './components/Footer';

function App() {
  const [ changeLanguage, setChangeLanguage ] = useState(0)
  return (
    <main className="App">
      <Header
        language={ changeLanguage }
        setLanguage={ setChangeLanguage }
      />
      <Welcome language={ changeLanguage } />
      <About language={ changeLanguage } />
      <Skills language={ changeLanguage } />
      <Projects language={ changeLanguage } />
      <Contact language={ changeLanguage } />
      <Footer language={ changeLanguage } />
    </main>
  );
}

export default App;
