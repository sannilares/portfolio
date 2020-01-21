import React, { useState } from 'react';
// import mina from './assets/Portfolio_kuva.jpg'
import './App.css';
import Navbar from './Navbar.js'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
// import Button from '@material-ui/core/Button';
import Gallery from './Gallery.js';
import FrontPage from './FrontPage.js';
import Design from './Design.js';
import Footer from './Footer.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { withRouter } from 'react-router-dom';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffee39",
      light: "#ffff71",
      dark: "#ffe122",
    },
    secondary: {
      main: '#fff160',
      light: "#ffff92",
      dark: "#c8b000"
    },
  },
});


function App() {
  let sections = [{ "name": "Design", "url": "/" }, { "name": "Portfolio", "url": "/portfolio" }, { "name": "Tietoa", "url": "/tietoa" }]

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Navbar color="primary" name="Sanni Lares" sections={sections} />

          {/* <header>
          <div className="headline">
            <img src={mina} alt="Sanni Lares" className="main_img"></img>
          </div>
        </header> */}
          {/* <Button variant="contained" color="primary" onClick={() =>
          setSection(sections.concat(["Testi"]))}>
          Pinkki nappi
      </Button> */}

          <Switch>
            <Route path="/tietoa">
              <FrontPage />
            </Route>
            <Route path="/portfolio">
              <Gallery />
            </Route>
            <Route path="/">
              <Design />
            </Route>
          </Switch>

          <Footer />
        </div>
      </Router>
    </ThemeProvider >
  );
}


export default App;