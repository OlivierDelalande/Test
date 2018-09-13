/*import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';



class App extends Component {

  render() {
    return (
      <div className="container">
          Hi there!
      </div>
    );
  }
}

export default connect(null, actions)(App);*/

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import List from './ListElements';

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <div>
            <Route exact path="/list" component={List} />
          </div>
        </BrowserRouter>
      </div>
  )
};

export default App;
