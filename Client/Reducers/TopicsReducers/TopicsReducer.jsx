export default (state = {totalTopics: []}, action) => {
  switch (action.type) {
    case 'TOGGLE_TOPIC': {
      return state.totalTopics.map(topic => {
        if(action.payload !== topic.id){
          return topic;
        } else {
          return Object.assign({}, topic, {followed: !topic.followed})
        }
      })
      return Object.assign({}, state, {
        followedTopics: action.payload
      })
    }
    case 'SET_TOPICS': {
      return Object.assign({}, state, {totalTopics: action.payload})
    }
    default: {
      return state
    }
  }
}
