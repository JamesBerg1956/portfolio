import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Nav";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>  
      <div>
        <Navigation />
        <Route exact path="/About" component={About} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
