export default (state = {totalArticles: [], articleInformation: {}}, action) => {
  switch (action.type) {
    case "SET_ALL_ARTICLES": {
      return Object.assign({}, state, {
        totalArticles: action.payload
      })
    }
    case "ADD_ARTICLE_INFORMATION": {
      return Object.assign({}, state, {
        articleInformation: Object.assign({}, state.articleInformation, action.payload)
      })
    }
    default: {
      return state
    }
  }

}