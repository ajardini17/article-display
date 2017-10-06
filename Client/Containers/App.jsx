import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestTopics } from '../Actions/TopicsAction.jsx';
import { requestArticles } from '../Actions/ArticlesAction.jsx';
import Articles from './Articles/Articles.jsx';
import TopicsPage from './Topics/TopicsPage.jsx';
import ArticleDetails from './Articles/ArticleDetailsPage.jsx';


const mapStateToProps = state => {
  return {
    articles: state.articles.totalArticles,
    totalTopics: state.topics.totalTopics
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ requestArticles, requestTopics}, dispatch)
}


class App extends React.Component {
  constructor(){
    super()
  }
  componentWillMount() {
   this.props.requestArticles();
   this.props.requestTopics();
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
