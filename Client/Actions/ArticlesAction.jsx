/**
 * 
 * @param {Number} article. id of a selected article 
 */
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
/**
 * 
 * @param {Array of Objects} articles 
 */
export const setAllArticles = articles => {
  return {
    type: 'SET_ALL_ARTICLES',
    payload: articles
  }
}
/**
 * 
 * Sets off action for Saga watcher
 */
export const requestArticles = id => {
  return {
    type: 'ARTICLES_FETCH_REQUESTED'
  }
}