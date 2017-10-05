import React, { Component } from 'react';

class ArticleEntry extends Component {
  constructor(props){
    super(props);
    state = {
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
          <div>
              {article.title ? article.title : null}
            <div>
              {article.attribution.displayName ? article.attribution.displayName : null}
            </div>
            <div>
              {article.summary ? article.summary : null}
            </div>
            <div>
              {article.createdAt ? article.createdAt : null} {article.likesCount ? article.likesCount : null}
            </div>
          </div>
      </div>
    );
  }
}

export default ArticleEntry;