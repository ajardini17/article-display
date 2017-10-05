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
    //console.log(article, 'inside article entry')
    return (
      <div>
          <div onClick={(e) => this.props.handleArticleRequest(e, this.props.article)}>
              {article.title ? article.title : null}
            <div>
              {article.attribution.displayName ? article.attribution.displayName : null}
            </div>
            <div>
              {article.summary ? article.summary : null}
            </div>
            <div>
              {article.createdAt ? this.props.timeHandler(Date.parse(article.createdAt)) : null} {article.likesCount ? article.likesCount : null}
            </div>
          </div>
      </div>
    );
  }
}

export default ArticleEntry;