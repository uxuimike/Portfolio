import React, { Component } from 'react';
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import './css/App.scss';

import Layout from './comp/Layout.jsx';
import Home from './comp/pages/home/Home.jsx';
import Work from './comp/pages/WorkPage.jsx';
import Blog from './comp/pages/BlogPage.jsx';


export default class App extends Component {

  render() {

    return (
      <Router history={hashHistory} >
        <Route path="/" component={Layout}>
          <IndexRoute component={Home}></IndexRoute>
          <Route path="work" component={Blog}></Route>
          <Route path="blog" component={Blog}></Route>
          <Route path="search" component={Blog}></Route>
        </Route>
      </Router>
    );
  }
}
