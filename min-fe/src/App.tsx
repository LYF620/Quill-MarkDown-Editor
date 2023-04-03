import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Quill from './pages/Quill';
import Monaco from './pages/monaco/Monaco';
import Prose from './pages/prosemirror'
function App() {
  return (
        <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/quill">Quill</Link>
            </li>
            <li>
              <Link to="/monaco">Monaco</Link>
            </li>
            <li>
              <Link to="/prose">Prose</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/quill">
            <Quill />
          </Route>
          <Route path="/monaco">
            <Monaco />
          </Route>
          <Route path="/prose">
            <Prose />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
