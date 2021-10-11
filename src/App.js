import React from 'react'
// global style 
import GlobalStyle from './components/GlobalStyle';
//Import Pages
import AboutMe from './pages/AboutMe';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <AboutMe/>
    </div>
  );
}

export default App;
