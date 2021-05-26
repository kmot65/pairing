import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Container, Header } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Medals from './pages/Medals';

function App() {
  return (
    <div>
      <Router>
        <Menu className="inverted fixed">
          <Container>
            <Menu.Item name="home">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item name="medals">
              <Link to="/medals">Medals</Link>
            </Menu.Item>
          </Container>
        </Menu>
        <Container className="main" style={{ margin: '7em' }}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/medals">
              <Medals />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
