import { combineReducers } from 'redux';
import FollowedTopicReducer from './topicsReducers/FollowedTopicsReducer.jsx';
import ArticlesReducer from './ArticlesReducers/ArticlesReducer.jsx';

export const reducers = combineReducers({
  followedTopics: FollowedTopicReducer, 
  articles: ArticlesReducer
});