import React from 'react'
// global style 
import GlobalStyle from './components/GlobalStyle';
//Import Pages
import AboutMe from './pages/AboutMe';
import Nav from './components/Nav';
import ContactUs  from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
//Router 
import {Switch, Route, useLocation} from "react-router-dom"
//Animations 
import {AnimatePresence} from "framer-motion"

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <AboutMe/>
        </Route>
        <Route exact path="/work">
          <OurWork/>
        </Route>
        <Route path="/work/:id">
          <MovieDetail/>
        </Route>
        <Route path="/contact">
          <ContactUs/>
        </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
