import React from 'react';
import {Link} from 'react-router';
import Login from '../LogInPage';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Digital Card Holder</h1>
        <p>The Best Way to Manage Your Cards</p>
        <Login/>
      </div>
    );
  }
}

export default HomePage;