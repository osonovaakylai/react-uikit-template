import React, { Component } from 'react';
import '../node_modules/uikit/dist/css/uikit.min.css';
import Example from './Containers/Example';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import Modal from 'react-modal'

class App extends Component {
  render() {
    return (
      <div className="uk-container uk-container-small">
        <h1>Hello, UIKit!</h1>
        <div className="uk-margin">
          <Example/>
        </div>
      </div>
    );
  }
}

export default App;
