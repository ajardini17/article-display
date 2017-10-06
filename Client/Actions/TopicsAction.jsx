export const toggleTopic = topic => {
  return {
    type: 'TOGGLE_TOPIC',
    payload: topic
  }
}

export const setTopics = topics => {
  return {
    type: 'SET_TOPICS',
    payload: topics
  }
}

export const requestTopics = () => {
  return {
    type: 'TOPICS_FETCH_REQUESTED'
  }
}