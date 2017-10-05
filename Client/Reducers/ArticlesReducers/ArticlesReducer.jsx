export default (state = {totalArticles: [], articleInformation: {}}, action) => {
  switch (action.type) {
    case "TOTAL_ARTICLES": {
      return Object.assign({}, state, {
        totalArticles: action.payload
      })
    }
    case "ADD_ARTICLE": {
      return Object.assign({}, state, {
        articleInformation: action.payload
      })
    }
    default: {
      return state
    }
  }

}