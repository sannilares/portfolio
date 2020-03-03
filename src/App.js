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
  Route
} from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e0f7fa",
      light: "#ffffff",
      dark: "#adc3c6",
    },
    secondary: {
      main: '#e0f2f1',
      light: "#e6ffff",
      dark: "#82b3c9"
    },
  },
});


function App() {
  let sections = [{ "name": "Portfolio", "url": "/" }, { "name": "CV", "url": "/cv" }]


  return (
    <React.Fragment>
      <div id="colorContainer" />
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Navbar color="primary" name="Sanni Lares" sections={sections} />

            <Switch>
              <Route path="/cv">
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