import React, { Component } from 'react';
import './styles/css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container logo">
          <img src="assets/images/head-logo.png"/>
        </div>     


        <Footer />
      </div>
    );
  }
}

class Navigation extends Component {
  render() {
    return ;
  }
}

class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <div class="container">
          <span class="text-muted">Place sticky footer content here.</span>
        </div>
      </footer>
    )
  }
}

export default App;