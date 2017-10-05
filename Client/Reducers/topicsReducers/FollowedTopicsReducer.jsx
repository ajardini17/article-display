export default (state = {topics: {}}, action) => {
  switch (action.type) {
    case "TOGGLE_TOPIC": {
      return Object.assign({}, state, {
        topics: {}
      })
    }
    default: {
      return state
    }
  }
}
