import React, { Component } from 'react';
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import './css/App.css';

import Layout from './comp/Layout.jsx';
import Home from './comp/pages/Home.jsx';
import Work from './comp/pages/Work.jsx';
import Blog from './comp/pages/Blog.jsx';


export default class App extends Component {


  render() {

    return (
      <Router history={hashHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home}></IndexRoute>
          <Route path="work" component={Work}></Route>
          <Route path="blog" component={Blog}></Route>
        </Route>
      </Router>
    );
  }
}
