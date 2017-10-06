export default (state = {totalTopics: {}}, action) => {
  switch (action.type) {
    case 'TOGGLE_TOPIC': {
      /**
       * action.payload is id of topic being toggled followed/unfollowed. 
       * 
       * totalTopics is a nested Object so must avoid mutating any of the objects
       * 
       */
      return Object.assign({}, state, {
        totalTopics: Object.assign({}, state.totalTopics, {[action.payload]: Object.assign({}, state.totalTopics[action.payload], {followed: !state.totalTopics[action.payload].followed})})
      })
    }
    case 'SET_TOPICS': {
      /** 
       * 
       * action.payload is an id. totalTopics is of form {[topicID]: {description: string, name: string, followed: bool}}
       * 
       * Fast lookup of the articles that have followed topics
       */
      let sculptedTopics = action.payload.reduce((acc, cur) => {
        acc[cur.id] = Object.assign({}, cur, {followed: true});
        delete acc[cur.id].id;
        return acc
      }, {})
      return Object.assign({}, state, {totalTopics: sculptedTopics})
    }
    default: {
      return state
    }
  }
}
