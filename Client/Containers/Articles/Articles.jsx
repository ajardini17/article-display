import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import moment from 'moment';

import {addArticle, setAllArticles, requestArticles} from '../../Actions/ArticlesAction.jsx';
import { setTopics, requestTopics } from '../../Actions/TopicsAction.jsx';
import NavBar from '../../Components/NavBar/NavBar.jsx';
import ArticleEntry from './ArticleEntry.jsx';
import ArticleDetailsPage from './ArticleDetailsPage.jsx';

const mapStateToProps = state => {
  return {
    articles: state.articles.totalArticles,
    articleInformation: state.articles.articleInformation,
    totalTopics: state.topics.totalTopics
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({addArticle, setAllArticles, setTopics, requestTopics, requestArticles}, dispatch)
}


class Articles extends Component {
  constructor(props){
    super(props)
    this.handleArticleRequest = this.handleArticleRequest.bind(this);
    this.fetchArticleInformation = this.fetchArticleInformation.bind(this);
    this.timeHandler = this.timeHandler.bind(this);
    this.state = {
      fake: false,
      article: []
    }
  }

  handleArticleRequest(e, article){
    // const info = this.props.articleInformation
    // if(!info.hasOwnProperty(article.id)){

    // }
    this.setState({fake: true, article: article})
  }
  fetchArticleInformation(id){
    axios.get()
  }
  timeHandler(date){
    return moment().format('MMM Do')
  }
  render() {

    return (
      <div>
        <NavBar/>
        {this.state.fake ?
        <ArticleDetailsPage selectedArticle={this.state.article}/>
        
        :

        
        <div className='container'>
          <div className='row'>
          {this.props.articles ? this.props.articles.map((article, index) => {

            return (
              
            article.topics.some(topicId => this.props.totalTopics.hasOwnProperty(topicId.id) && this.props.totalTopics[topicId.id].followed) 
            
            ?
            
            <div className='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6 article-entry col-xl-offset-3 col-xl-6'>
              <ArticleEntry handleArticleRequest={this.handleArticleRequest} timeHandler={this.timeHandler} article={article} key={index}/>    
            </div>
            
            :
            
            null
            )  
          })
          
          :

          null
          }
          </div>
          </div>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);