import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import Articles from './Articles/Articles.jsx';
import TopicsPage from './Topics/TopicsPage.jsx';

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
          <Route path = '/topics' render = {() => <TopicsPage />} />
          <Route path = '/articles/:id' render = {() => <ArticleDetails />} />
        </div>

      </BrowserRouter>
    )
  }
}

