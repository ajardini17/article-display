const { expect } = require('chai');

const topicsReducer = require('./Reducers.js');
const {setTopics, toggleTopic} = require('./Actions.js');

/**
 * Topics Reducer looks like {totalTopics: {}}
 * 
 * 
 */

describe('Topic action and reducer test', () => {
  it('Set topic action should affect topic reducer', () => {
    const topics = [{id: 1, name: 'runny nose'}]
    const action = setTopics(topics);
    const reducer = topicsReducer.default(null, action);

    const checkIfPlaced = topics.every(topic => reducer.totalTopics.hasOwnProperty(topic.id));
    expect(checkIfPlaced).to.equal(true)
  });
  it('topic toggle should affect selected topic\'s "followed" property in reducer', () => {

    const topics = [{id: 2, name: 'food coma'}, {id: 3, name: 'third eye blind'}];
    const reducer = topicsReducer.default(null, setTopics(topics));

    const newReducer = topics.reduce((acc, cur) =>  topicsReducer.default(acc, toggleTopic(cur.id)), reducer)
    const everyTopicToggled = topics.every(topic => !newReducer.totalTopics[topic.id].followed);
    expect(everyTopicToggled).to.equal(true)
  });
})