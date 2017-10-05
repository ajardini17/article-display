import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import moment from 'moment';

import {addArticle, setAllArticles} from '../../Actions/Articles/ArticlesAction.jsx';
import { setTopics } from '../../Actions/Topics/TopicsAction.jsx';
import NavBar from '../../Components/NavBar/NavBar.jsx';
import ArticleEntry from './ArticleEntry.jsx';

const mapStateToProps = state => {
  return {
    articles: state.articles.totalArticles,
    articleInformation: state.articles.articleInformation
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({addArticle, setAllArticles, setTopics}, dispatch)
}


class Articles extends Component {
  constructor(props){
    super(props)
    this.handleArticleRequest = this.handleArticleRequest.bind(this);
    this.fetchArticleInformation = this.fetchArticleInformation.bind(this);
    this.timeHandler = this.timeHandler.bind(this);
  }

  componentDidMount() {
    Promise.all([axios.get('***REMOVED***articles.json'), axios.get('***REMOVED***topics.json')])
    .then(reply => {
      this.props.setAllArticles(reply[0].data.data)
      const topics = reply[1].data.data.map(topic => Object.assign({}, topic, {followed: true}));
      this.props.setTopics(topics)
    }) 
  }
  componentWillReceiveProps(nextProps) {
    
  }

  handleArticleRequest(e, article){
    // const info = this.props.articleInformation
    // if(!info.hasOwnProperty(article.id)){

    // }
    console.log('clicked', article)
  }
  fetchArticleInformation(id){
    axios.get()
  }
  timeHandler(date){
    return moment().format('MMM Do')
  }
  render() {
    console.log(this.props.articles, 'ARTICLES')
    return (
      <div>
        <NavBar/>
        <div className='container'>
          <div className='row'>
          {this.props.articles ? this.props.articles.map((article, index) => (
            <div className='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6 article-entry col-xl-offset-3 col-xl-6'>
            <ArticleEntry handleArticleRequest={this.handleArticleRequest} timeHandler={this.timeHandler} article={article} key={index}/>    
            </div>          
          ))
          :
          null
          }
          </div>
          </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);