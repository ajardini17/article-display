export const addSelectedArticle = article => {
  return {
    type: 'ADD_ARTICLE_INFORMATION',
    payload: article
  }
}
export const requestSelectedArticle = () => {
  return {
    type: 'SELECTED_ARTICLE_FETCH_REQUESTED'
  }
}
export const setAllArticles = articles => {
  return {
    type: 'SET_ALL_ARTICLES',
    payload: articles
  }
}

export const requestArticles = id => {
  return {
    type: 'ARTICLES_FETCH_REQUESTED',
    payload: id
  }
}