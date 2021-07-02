import React, { Component } from 'react';
import Top from './Top.jsx';
import Container from '@material-ui/core/Container';
import Nav from './Nav.jsx';
import Header from './Header.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: 4,
    }    
  }

  render() {
    let { items } = this.state;
    return (
      <div className="App">
        <Header />

      </div>
    );
  }
}

export default App;