import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NavBar from '../../Components/NavBar/NavBar.jsx';
import ArticleEntry from './ArticleEntry.jsx';

const mapStateToProps = state => {
  return {
    articles: state.articles.totalArticles
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({addArticle}, dispatch)
}

class Articles extends Component {
  constructor(){
    super()
    this.handleArticleRequest = this.handleArticleRequest.bind(this);
  }
  handleArticleRequest(){
    
  }
  render() {
    return (
      <div>
        <NavBar/>
          {this.props.articles.map((article, index) => {
            <ArticleEntry article={article}/>
          })}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);