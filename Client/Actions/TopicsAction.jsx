/**
 * 
 * @param {Number} topic. Takes form of an id of a selected topic 
 */
export const toggleTopic = topic => {
  return {
    type: 'TOGGLE_TOPIC',
    payload: topic
  }
}
/**
 * 
 * @param {Array of Objects} topics
 * 
 * The reducer morphs it into a more managable form 
 */
export const setTopics = topics => {
  return {
    type: 'SET_TOPICS',
    payload: topics
  }
}
/**
 * sets off Action that Saga watcher sees
 */
export const requestTopics = () => {
  return {
    type: 'TOPICS_FETCH_REQUESTED'
  }
}