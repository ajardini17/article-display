import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import Articles from './Articles/Articles.jsx';
import Topics from './Topics/Topics.jsx';

import ArticleDetails from '../Components/ArticleDetails/ArticleDetails.jsx';


export default class App extends React.Component {
  constructor(){
    super()
  }
  render(){
    return (
      <BrowserRouter>
        <div>
          <Route exact path = '/' render={() => <Articles />} />
          <Route path = '/topics' render = {() => <Topics />} />
          <Route path = '/articles/:id' render = {() => <ArticleDetails />} />
        </div>

      </BrowserRouter>
    )
  }
}

