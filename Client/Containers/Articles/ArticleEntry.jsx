import React, { Component } from 'react';

class ArticleEntry extends Component {
  constructor(props){
    super(props);
    this.state = {
      article: this.props.article
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({article: nextProps.article})
  }
  render() {
    let article = this.state.article;
    return (
      <div>
          <div onClick={(e) => this.props.handleArticleRequest(e, article)}>
            <div className = 'article-title'>
              <a href={article.url}><h1>
              {article.title}
              </h1></a>
              </div>
            <div className = 'article-second-block'>
              <div className = 'article-displayName'>
              {article.attribution.displayName}
              </div>
              <div className = 'article-date'>
                {this.props.timeHandler(Date.parse(article.createdAt))}
              </div>
            </div>
            <div className = 'article-image-container'>
              {article.media[0] ? <img src={article.media[0].url} className = 'img-fluid article-image' /> : null}
            </div>
            <div className = 'article-summary'>
              {article.summary}
            </div>
            <div className = 'like-container'>
            {article.likesCount} {article.likesCount !== 1 ? 'Likes' : 'Like'}<span className = 'glyphicon glyphicon-thumbs-up like-glyph'></span>
            </div>
          </div>
      </div>
    );
  }
}

export default ArticleEntry;