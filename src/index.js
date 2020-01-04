import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router, Route } from "react-router-dom";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import Uploader from './__uploader';

const routing = (
  <Router>
    <div className="rootContainer">
      <Route exact path="/" component={App} />
      <Route path="/__uploader" component={Uploader} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));