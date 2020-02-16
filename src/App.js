import React from 'react';
import './App.css';
import Navbar from './Navbar.js'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import FrontPage from './FrontPage.js';
import Design from './Design.js';
import Footer from './Footer.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
  let sections = [{ "name": "Portfolio", "url": "/" }, { "name": "Tietoa", "url": "/tietoa" }]


  return (
    <React.Fragment>
      <div id="colorContainer" />
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Navbar color="primary" name="Sanni Lares" sections={sections} />

            <Switch>
              <Route path="/tietoa">
                <FrontPage />
              </Route>
              <Route path="/">
                <Design />
              </Route>
            </Switch>

            <Footer />
          </div>
        </Router>
      </ThemeProvider >
    </React.Fragment>
  );
}


export default App;