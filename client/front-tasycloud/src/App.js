import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header';
import Restaurants from './components/Restaurants';
import Restaurant from './components/Restaurant';

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: ''
  };
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.warn(err))
  }

    callApi = async () => {
    const response = await fetch('/restaurants');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Restaurants} />
          <Route path="/restaurant" component={Restaurant} />
        </Switch>
      </div>
    );
  }
}

export default App;
