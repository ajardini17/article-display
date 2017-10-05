export const addArticle = article => {
  return {
    type: 'ADD_ARTICLE_INFORMATION',
    payload: article
  }
}

export const setAllArticles = articles => {
  return {
    type: 'SET_ALL_ARTICLES',
    payload: articles
  }
}
