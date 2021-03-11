import React from 'react';
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './Navbar';
import CV from './CV';
import PortfolioHeader from './PortfolioHeader';
import Footer from './Footer';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e0f7fa',
      light: '#ffffff',
      dark: '#adc3c6',
    },
    secondary: {
      main: '#e0f2f1',
      light: '#e6ffff',
      dark: '#82b3c9',
    },
  },
});


function App() {
  const sections = [{ name: 'Portfolio', url: '/' }, { name: 'CV', url: '/cv' }];


  return (
    <>
      <div id="colorContainer" />
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Navbar color="primary" name="Sanni Lares" sections={sections} />

            <Switch>
              <Route path="/cv">
                <CV />
              </Route>
              <Route path="/">
                <PortfolioHeader />
              </Route>
            </Switch>

            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
}


export default App;
